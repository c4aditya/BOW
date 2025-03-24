import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, 
    port: 3000, 
    strictPort: true, 
    cors: true,
    allowedHosts:["cd57-103-83-149-55.ngrok-free.app"],
  }
})

