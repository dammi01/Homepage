import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/Homepage/',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: '/index.html',
      },
    },
    assetsInclude: ['**/*.pdf'],
  },
  server: {
    open: true,
  },
});
