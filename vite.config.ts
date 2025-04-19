import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'demo'),
  plugins: [react()],
  assetsInclude: ['**/*.html'],
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'demo/index.html')
    }
  }
})