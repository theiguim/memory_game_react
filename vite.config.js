import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/memory_game_react",
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
