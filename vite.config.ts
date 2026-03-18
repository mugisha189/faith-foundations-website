import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 4040,
  },
  define: {
    global: 'globalThis', // Fix global undefined error
  },
  build: {
    rollupOptions: {
      external: ['jquery'], // Externalize jQuery
      output: {
        manualChunks: undefined,
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        globals: {
          jquery: '$', // Map jQuery to global $ variable
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    assetsDir: 'assets',
    outDir: 'dist',
    emptyOutDir: true,
  },
  base: '/',
  optimizeDeps: {
    include: ['jquery'], // Ensure jQuery is pre-bundled and available
  },
})
