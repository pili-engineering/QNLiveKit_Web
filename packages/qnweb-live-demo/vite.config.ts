import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

const packageJson = require('./package.json');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  console.log('当前环境: ', process.env.VITE_NODE_ENV);

  return {
    define: {
      mainVersion: JSON.stringify(packageJson.version),
    },
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
