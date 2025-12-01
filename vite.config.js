import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'demo'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts']
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'HolofluxLoader',
      fileName: (format) => `holoflux-loader.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      output: {
        assetFileNames: 'holoflux-loader.css'
      }
    }
  }
});