import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: 'lightningcss',
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'router': ['@solidjs/router'],
          'lucide': ['lucide-solid'],
        },
      },
    },
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
})
