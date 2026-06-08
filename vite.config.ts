import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  root: 'html5',
  publicDir: resolve(__dirname, 'public'),
  appType: 'spa',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@react': resolve(__dirname, 'react'),
      '@css': resolve(__dirname, 'css3'),
      '@js': resolve(__dirname, 'javascript'),
    },
  },
  server: {
    host: true,
    port: 5173,
    allowedHosts: true,
    fs: {
      allow: [resolve(__dirname)],
    },
  },
  preview: {
    host: true,
    port: 4173,
  },
});
