import path from 'node:path';

import uni from '@dcloudio/vite-plugin-uni';
import { defineConfig } from 'vite';
import uniPlatformLoaderPlugin from 'vite-plugin-uni-platform-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    uniPlatformLoaderPlugin({
      platform: process.env.UNI_PLATFORM,
      rootDir: path.resolve(__dirname, 'src'),
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
