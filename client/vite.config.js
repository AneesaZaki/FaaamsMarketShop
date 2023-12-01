import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import https from "https";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import dotenv from 'dotenv';
dotenv.config();


const { PORT = 3000 } = process.env;

export default defineConfig({
  plugins: [react({
      jsxRuntime: 'classic' // Add this line
    }
  )],
  server: {
    proxy: {
      '/api': {
        target: `http://127.0.0.1:${PORT}`,
        changeOrigin: true,
        secure:false,
      },
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.jsx",
    },
  },
});
