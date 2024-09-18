import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,   // Automatically opens the browser
    port: 3001,   // Change the port to 3000 or any other port you prefer
  },
})
