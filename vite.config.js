import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    cssMinify: false // Disable lightningcss for Termux compatibility
  },
  base: '/sheerid-verification-service/' // Required for GitHub Pages
})
