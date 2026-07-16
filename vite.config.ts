import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * O index.html aponta para ../dist e ../public (Live Server).
 * No Vite (dev/build), reescrevemos para o entry TSX e a pasta public.
 */
function liveServerEntry(): Plugin {
  return {
    name: 'live-server-entry',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        let next = html
          .replace(/\.\.\/public\//g, '/')
          .replace('src="../dist/assets/index.js"', 'src="./main.tsx"');

        if (ctx.server) {
          next = next.replace(
            /<link\s+rel="stylesheet"\s+crossorigin\s+href="\.\.\/dist\/assets\/[^"]+\.css"\s*\/?>\s*/g,
            '',
          );
        }

        return next;
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), liveServerEntry()],
  root: 'html5',
  base: './',
  publicDir: resolve(__dirname, 'public'),
  appType: 'spa',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (info) => {
          if (info.name && info.name.endsWith('.css')) {
            return 'assets/index.css';
          }
          return 'assets/[name][extname]';
        },
      },
    },
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
