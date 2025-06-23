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
      // Removed 'external' for @remix-run/router to fix browser import error
      maxParallelFileOps: 10
    }
  }
})
