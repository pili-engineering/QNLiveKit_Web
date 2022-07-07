import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      proxy: {
        '/v1': {
          target: 'http://10.200.20.28:5080',
          changeOrigin: true
        },
        '/client': {
          target: 'http://10.200.20.28:8099',
          changeOrigin: true
        }
      }
    }
  };
});
