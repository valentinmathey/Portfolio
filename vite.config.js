import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Habilita los source maps en producción
    rollupOptions: {
      output: {
        manualChunks: {
          // Divide los paquetes grandes en chunks más pequeños
          react: ['react', 'react-dom'],
          i18n: ['i18next', 'react-i18next'],
        },
      },
    },
  },
  server: {
    open: true, // Abre automáticamente el navegador al iniciar el servidor
  },
});
