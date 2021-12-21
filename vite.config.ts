/* eslint-disable new-cap */
/* eslint-disable camelcase */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
// https://stackoverflow.com/questions/68380194/tranform-vue-config-js-to-vite-config-js-build-path
export default defineConfig({
	base:
		process.env.NODE_ENV === 'production'
			? '/test-pwa-react-ghpages/' // prod
			: '/test-pwa-react-ghpages/', // dev
	plugins: [
		react(),
		VitePWA({
			// registerType: 'autoUpdate',
			includeAssets: [
				'img/favicon.svg',
				'img/logo.svg',
				'robots.txt',
				'icons/apple-touch-icon.png',
				'icons/android-chrome-192x192.png',
				'icons/android-chrome-512x512.png',
			],
			manifest: {
				name: 'test-pwa-react-ghpages',
				short_name: 'test-pwa-react-ghpages',
				description: 'test-pwa-react-ghpages',
				theme_color: '#2377ff',
				background_color: '#2377ff',
				icons: [
					{
						src: 'icons/apple-touch-icon.png',
						sizes: '180x180',
						type: 'image/png',
					},
					{
						src: 'icons/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'icons/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
				start_url: '.',
				// scope: 'https://emarifer.github.io/test-vite/',
				display: 'standalone',
			},
		}),
	],
});
