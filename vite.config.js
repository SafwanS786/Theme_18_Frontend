import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: "0.0.0.0", // expose to network (all IPs)
    // port: 5173       // you can change if you want
    port: 5173,
    strictPort: false,
  }
})
