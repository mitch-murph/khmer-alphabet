import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' && process.env.VITE_BASE_PATH ? process.env.VITE_BASE_PATH : '/',
}))
