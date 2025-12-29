import fs from 'fs'
import path from 'path'

const root = process.cwd()
const canonicalPath = path.join(root, 'public/forge/assets/anvil-seal.svg')
const decorativePath = path.join(root, 'public/forge/assets/anvil-seal-decorative.svg')
const taglinePath = path.join(root, 'public/forge/assets/anvil-seal-with-tagline.svg')

const normalizePath = (d) => d.replace(/\s+/g, ' ').trim()

const extractPaths = (svg) => {
  const matches = [...svg.matchAll(/<path[^>]*d="([^"]*)"/g)]
  return matches
    .map((match) => normalizePath(match[1]))
    .filter((d) => d && d.trim().length > 0)
}

const pickPrimary = (paths) => {
  if (paths.length === 0) {
    return null
  }
  return paths.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  )
}

const canonicalSvg = fs.readFileSync(canonicalPath, 'utf8')
const decorativeSvg = fs.readFileSync(decorativePath, 'utf8')
const taglineSvg = fs.readFileSync(taglinePath, 'utf8')

const canonicalPaths = extractPaths(canonicalSvg)
const decorativePaths = extractPaths(decorativeSvg)
const taglinePaths = extractPaths(taglineSvg)

const canonicalPrimary = pickPrimary(canonicalPaths)

if (!canonicalPrimary) {
  console.error('No canonical path found.')
  process.exit(1)
}

if (decorativePaths.length !== 1) {
  console.error('Decorative SVG must contain exactly one path.')
  process.exit(1)
}

if (taglinePaths.length !== 1) {
  console.error('Tagline SVG must contain exactly one path for the mark.')
  process.exit(1)
}

if (decorativePaths[0] !== canonicalPrimary) {
  console.error('Decorative path does not match canonical silhouette.')
  process.exit(1)
}

if (taglinePaths[0] !== canonicalPrimary) {
  console.error('Tagline path does not match canonical silhouette.')
  process.exit(1)
}

console.log('Anvil variant verification passed.')
