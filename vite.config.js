import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative so the build works at
// https://thekopis.github.io/jaeblendzzz/ and on any future custom domain
export default defineConfig({
  plugins: [react()],
  base: './',
})
