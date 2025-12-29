declare global {
  interface ImportMeta {
    env: {
      NODE_ENV: 'production' | 'development'
      PROD: boolean
      DEV: boolean
    }
  }
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'production' | 'development'
      PROD: boolean
      DEV: boolean
      // Server-only intake email configuration (do not use in client code).
      SMTP_HOST?: string
      SMTP_PORT?: string
      SMTP_USER?: string
      SMTP_PASS?: string
      INTAKE_EMAIL?: string
    }
  }
}

export {}
