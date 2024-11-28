import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/Homepage/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: '/index.html',
      },
    },
  },
  server: {
    open: true,
  },
});
