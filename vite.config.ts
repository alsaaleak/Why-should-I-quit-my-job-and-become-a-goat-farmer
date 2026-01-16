import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // المسار الأساسي للمستودع على GitHub
  base: '/Why-should-I-quit-my-job-and-become-a-goat-farmer/',

  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  plugins: [react()],

  resolve: {
    alias: {
      // إعداد الاختصارات للمجلدات
      '@': path.resolve(__dirname, '.'),
    }
  }
});