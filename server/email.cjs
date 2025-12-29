const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

const sendIntakeEmail = async (data) => {
  const to = process.env.INTAKE_EMAIL

  if (!to) {
    console.warn('INTAKE_EMAIL not set; skipping email send.')
    return
  }

  await transporter.sendMail({
    from: `"BDS Intake" <${process.env.SMTP_USER}>`,
    to,
    subject: 'New Client Intake Request',
    text: `
New intake received

Name: ${data.name}
Email: ${data.email}
Organization: ${data.org ?? '(none)'}
Project Type: ${data.project_type}

Problem:
${data.problem}

Success Looks Like:
${data.success}

Deadline: ${data.deadline ?? 'Not specified'}
Budget: ${data.budget ?? 'Not specified'}
Maintenance: ${data.maintenance ?? 'Not specified'}
`.trim(),
  })
}

module.exports = {
  sendIntakeEmail,
}
