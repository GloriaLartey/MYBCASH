import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Limits heavy file watching to just your src folder to save CPU
    watch: {
      ignored: ['**/node_modules/**', '**/dist/**'],
    },
    // Stabilizes port scanning for firewall software
    host: true,
    port: 5173,
  },
  optimizeDeps: {
    // Explicitly pre-bundles heavy dependencies on server start
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'react-router', 'zustand'],
  },
})
