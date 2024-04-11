import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import Terminal from 'vite-plugin-terminal';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    Terminal({
      output: ['terminal', 'console']
    })
  ],
  server: {
    port: 9002
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  }
})
