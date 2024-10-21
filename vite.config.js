import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      additionalData: `
      @import "src/sass/variables";
      @import "node_modules/bootstrap/scss/bootstrap";
    `,
    },
  },
});
