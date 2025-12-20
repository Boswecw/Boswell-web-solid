import { defineConfig } from 'vite'
import path from 'node:path'
import solidPlugin from 'vite-plugin-solid'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  publicDir: path.resolve(__dirname, '../public'),
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    solidPlugin(),
    {
      name: 'Replace env variables',
      transform(code, id) {
        if (id.includes('node_modules')) {
          return code
        }
        return code
          .replace(/process\.env\.SSR/g, 'false')
          .replace(/process\.env\.DEV/g, isProd ? 'false' : 'true')
          .replace(/process\.env\.PROD/g, isProd ? 'true' : 'false')
          .replace(/process\.env\.NODE_ENV/g, isProd ? '"production"' : '"development"')
          .replace(/import\.meta\.env\.SSR/g, 'false')
          .replace(/import\.meta\.env\.DEV/g, isProd ? 'false' : 'true')
          .replace(/import\.meta\.env\.PROD/g, isProd ? 'true' : 'false')
          .replace(/import\.meta\.env\.NODE_ENV/g, isProd ? '"production"' : '"development"')
      },
    },
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
  },
})
