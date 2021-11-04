import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { VitePWA } from 'vite-plugin-pwa';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  // server: {
  //   host: true,
  // },
  plugins: [
    reactRefresh(),
    VitePWA({
      manifest: {
        name: 'PWA Basic',
        short_name: 'PWA Basic',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png', // <== don't add slash, for testing
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png', // <== don't remove slash, for testing
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png', // <== don't add slash, for testing
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#353433',
      },
    }),
    replace({
      __DATE__: new Date().toISOString(),
    }),
  ],
});
