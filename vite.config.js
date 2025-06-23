import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@remix-run/router']
  },
  build: {
    rollupOptions: {
      external: ['@remix-run/router'],
      // Limit parallel file operations to reduce EMFILE errors
      maxParallelFileOps: 10
    }
  }
})
