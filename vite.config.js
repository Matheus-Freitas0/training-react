import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/members/api': {
        target: 'http://192.168.15.3:8080',
        changeOrigin: true,
      },
    },
  },
});
