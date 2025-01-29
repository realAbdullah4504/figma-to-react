import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This enables listening on all network interfaces
    port: 5173  // This is optional since 5173 is the default port
  }
})
