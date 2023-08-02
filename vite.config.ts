import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@custom': path.resolve(__dirname, 'src/components/customs/index.ts'),
      '@generated': path.resolve(__dirname, 'src/components/generated/index.ts'),
    }
  }
});
