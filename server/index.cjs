const http = require('http')
const fs = require('fs')
const path = require('path')
const { sendIntakeEmail } = require('./email.cjs')

const loadEnvFile = () => {
  const envPath = path.resolve(__dirname, '../.env')
  if (!fs.existsSync(envPath)) {
    return
  }
  const contents = fs.readFileSync(envPath, 'utf8')
  contents.split('\n').forEach((line) => {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) {
      return
    }
    const separatorIndex = trimmed.indexOf('=')
    if (separatorIndex === -1) {
      return
    }
    const key = trimmed.slice(0, separatorIndex).trim()
    let value = trimmed.slice(separatorIndex + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    if (!process.env[key]) {
      process.env[key] = value
    }
  })
}

loadEnvFile()

const PORT = Number(process.env.PORT) || 3000
const HOST = '0.0.0.0'
const DIST_DIR = path.resolve(__dirname, '../dist')
const DATA_DIR = path.resolve(__dirname, '../data')
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'contact-submissions.jsonl')
const INTAKE_PRIMARY_DIR = path.resolve(__dirname, '../public/forge/intake')
const INTAKE_FALLBACK_DIR = path.resolve(__dirname, '../.tmp')
const INTAKE_PRIMARY_FILE = path.join(INTAKE_PRIMARY_DIR, 'intake-submissions.jsonl')
const INTAKE_FALLBACK_FILE = path.join(INTAKE_FALLBACK_DIR, 'intake-submissions.jsonl')

const DIST_INDEX = path.join(DIST_DIR, 'index.html')
console.log('DIST_DIR', DIST_DIR)
console.log('DIST_INDEX_EXISTS', fs.existsSync(DIST_INDEX))

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000
const RATE_LIMIT_MAX = 5
const rateLimit = new Map()

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
}

const sendJson = (res, statusCode, payload) => {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' })
  res.end(JSON.stringify(payload))
}

const sendError = (res, statusCode, code, message, details = {}) => {
  sendJson(res, statusCode, { error: { code, message, details } })
}

const getClientIp = (req) => {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim()
  }
  return req.socket.remoteAddress || 'unknown'
}

const checkRateLimit = (ip) => {
  const now = Date.now()
  const entry = rateLimit.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return { ok: true }
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { ok: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) }
  }

  entry.count += 1
  return { ok: true }
}

const parseBody = (req, body) => {
  const contentType = req.headers['content-type'] || ''
  if (contentType.includes('application/json')) {
    try {
      return JSON.parse(body || '{}')
    } catch (error) {
      return null
    }
  }

  if (contentType.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams(body || '')
    return Object.fromEntries(params.entries())
  }

  return null
}

const validatePayload = (payload) => {
  if (!payload) {
    return { ok: false, code: 'invalid_body', message: 'Invalid request body.' }
  }

  const name = String(payload.name || '').trim()
  const email = String(payload.email || '').trim()
  const message = String(payload.message || '').trim()
  const honeypot = String(payload['bot-field'] || payload.website || '').trim()

  if (honeypot) {
    return { ok: true, honeypot: true }
  }

  if (name.length < 2) {
    return { ok: false, code: 'invalid_name', message: 'Name is required.' }
  }

  if (!emailPattern.test(email)) {
    return { ok: false, code: 'invalid_email', message: 'Valid email is required.' }
  }

  if (message.length < 10) {
    return { ok: false, code: 'invalid_message', message: 'Message must be at least 10 characters.' }
  }

  return { ok: true, name, email, message }
}

const storeSubmission = (submission) => {
  fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.appendFileSync(SUBMISSIONS_FILE, `${JSON.stringify(submission)}\n`, 'utf8')
}

const validateIntake = (payload) => {
  if (!payload) {
    return { ok: false, code: 'invalid_body', message: 'Invalid request body.' }
  }

  const name = String(payload.name || '').trim()
  const email = String(payload.email || '').trim()
  const projectType = String(payload.project_type || '').trim()
  const problem = String(payload.problem || '').trim()
  const success = String(payload.success || '').trim()
  const maintenance = String(payload.maintenance || '').trim()
  const constraints = payload.constraints || {}

  const missing = []

  if (name.length < 2) missing.push('name')
  if (!emailPattern.test(email)) missing.push('email')
  if (!projectType) missing.push('project_type')
  if (!problem) missing.push('problem')
  if (!success) missing.push('success')
  if (!maintenance) missing.push('maintenance')
  if (!constraints.decision_maker || !constraints.scope_first || !constraints.ai_tool_not_authority) {
    missing.push('constraints')
  }

  if (missing.length > 0) {
    return {
      ok: false,
      code: 'missing_fields',
      message: 'Required fields are missing or invalid.',
      details: { fields: missing },
    }
  }

  return {
    ok: true,
    name,
    email,
    org: String(payload.org || '').trim(),
    projectType,
    problem,
    success,
    links: String(payload.links || '').trim(),
    deadline: String(payload.deadline || '').trim(),
    budget: String(payload.budget || '').trim(),
    maintenance,
    constraints: {
      decision_maker: Boolean(constraints.decision_maker),
      scope_first: Boolean(constraints.scope_first),
      ai_tool_not_authority: Boolean(constraints.ai_tool_not_authority),
    },
  }
}

const storeIntakeSubmission = (submission) => {
  try {
    fs.mkdirSync(INTAKE_PRIMARY_DIR, { recursive: true })
    fs.appendFileSync(INTAKE_PRIMARY_FILE, `${JSON.stringify(submission)}\n`, 'utf8')
    return { location: INTAKE_PRIMARY_FILE }
  } catch (error) {
    fs.mkdirSync(INTAKE_FALLBACK_DIR, { recursive: true })
    fs.appendFileSync(INTAKE_FALLBACK_FILE, `${JSON.stringify(submission)}\n`, 'utf8')
    return { location: INTAKE_FALLBACK_FILE, fallback: true }
  }
}

const handleContact = (req, res, body) => {
  const payload = parseBody(req, body)
  const validation = validatePayload(payload)

  if (!validation.ok) {
    return sendError(res, 400, validation.code, validation.message)
  }

  if (validation.honeypot) {
    return sendJson(res, 200, { ok: true })
  }

  const ip = getClientIp(req)
  const rateStatus = checkRateLimit(ip)

  if (!rateStatus.ok) {
    res.setHeader('Retry-After', String(rateStatus.retryAfter))
    return sendError(res, 429, 'rate_limited', 'Too many requests. Try again later.')
  }

  const submission = {
    receivedAt: new Date().toISOString(),
    ip,
    name: validation.name,
    email: validation.email,
    message: validation.message,
  }

  storeSubmission(submission)
  return sendJson(res, 200, { ok: true })
}

const handleIntake = async (req, res, body) => {
  console.log('INTAKE HANDLER HIT')
  const payload = parseBody(req, body)
  const validation = validateIntake(payload)

  if (!validation.ok) {
    console.log('INTAKE VALIDATION FAILED', validation)
    return sendError(res, 400, validation.code, validation.message, validation.details)
  }

  const ip = getClientIp(req)
  const rateStatus = checkRateLimit(ip)

  if (!rateStatus.ok) {
    res.setHeader('Retry-After', String(rateStatus.retryAfter))
    return sendError(res, 429, 'rate_limited', 'Too many requests. Try again later.')
  }

  const submission = {
    submitted_at: new Date().toISOString(),
    name: validation.name,
    email: validation.email,
    org: validation.org,
    project_type: validation.projectType,
    problem: validation.problem,
    success: validation.success,
    links: validation.links,
    deadline: validation.deadline,
    constraints: validation.constraints,
    budget: validation.budget,
    maintenance: validation.maintenance,
    ip,
  }

  console.log('INTAKE STORE START', submission.email)
  const storage = storeIntakeSubmission(submission)
  console.log('INTAKE STORE DONE', storage)

  try {
    // TODO: REMOVE TEMP LOGS
    console.log('[intake-email] sending...', {
      to: process.env.INTAKE_EMAIL,
      from: process.env.SMTP_USER,
    })
    await sendIntakeEmail(submission)
    console.log('[intake-email] sent')
  } catch (error) {
    console.warn('[intake-email] failed', error?.message || error)
  }

  return sendJson(res, 200, { ok: true })
}

const serveStatic = (req, res) => {
  const urlPath = req.url ? req.url.split('?')[0] : '/'
  const safePath = path.normalize(urlPath).replace(/^\.\.(\/|\\)/, '')
  const filePath = path.join(DIST_DIR, safePath)

  const serveFile = (resolvedPath) => {
    fs.readFile(resolvedPath, (error, data) => {
      if (error) {
        return sendError(res, 404, 'not_found', 'Resource not found.')
      }
      const ext = path.extname(resolvedPath).toLowerCase()
      const contentType = mimeTypes[ext] || 'application/octet-stream'
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(data)
    })
  }

  fs.stat(filePath, (error, stats) => {
    if (!error && stats.isFile()) {
      return serveFile(filePath)
    }

    const indexPath = path.join(DIST_DIR, 'index.html')
    return serveFile(indexPath)
  })
}

const server = http.createServer((req, res) => {
  if (!req.url) {
    return sendError(res, 400, 'invalid_request', 'Invalid request.')
  }

  if (req.url.startsWith('/health')) {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      return sendError(res, 405, 'method_not_allowed', 'Method not allowed.')
    }
    return sendJson(res, 200, { ok: true })
  }

  if (req.url.startsWith('/api/contact')) {
    if (req.method !== 'POST') {
      return sendError(res, 405, 'method_not_allowed', 'Method not allowed.')
    }
    let body = ''
    req.on('data', (chunk) => {
      body += chunk
      if (body.length > 100000) {
        req.socket.destroy()
      }
    })
    req.on('end', () => handleContact(req, res, body))
    return
  }

  if (req.url.startsWith('/api/intake')) {
    if (req.method !== 'POST') {
      return sendError(res, 405, 'method_not_allowed', 'Method not allowed.')
    }
    let body = ''
    req.on('data', (chunk) => {
      body += chunk
      if (body.length > 150000) {
        req.socket.destroy()
      }
    })
    req.on('end', () => {
      handleIntake(req, res, body).catch((error) => {
        console.warn('Intake handler error.', error)
        sendError(res, 500, 'intake_failed', 'Intake request failed.')
      })
    })
    return
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return sendError(res, 405, 'method_not_allowed', 'Method not allowed.')
  }

  return serveStatic(req, res)
})

server.listen(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT}`)
})
