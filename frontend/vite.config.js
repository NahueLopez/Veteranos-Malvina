import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Nombre del repo en GitHub Pages -> https://nahuelopez.github.io/Veteranos-Malvina/
  base: '/Veteranos-Malvina/',
  plugins: [react()],
})
