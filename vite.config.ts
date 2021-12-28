/* eslint-disable new-cap */
/* eslint-disable camelcase */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default ({ mode }) => {
	Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

	return defineConfig({
		base: `/${process.env.BASE_URL || ''}/`,
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
					name: 'react-pwa-ghp',
					short_name: 'react-pwa-ghp',
					description: 'react-pwa-ghp',
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
};

/**
 * ENV IN VITE.CONFIG.TS:
 * https://github.com/vitejs/vite/issues/1930#issuecomment-986088066
 * https://stackoverflow.com/questions/66389043/how-can-i-use-vite-env-variables-in-vite-config-js
 * https://vitejs.dev/guide/env-and-mode.html
 *
 * https://vitejs.dev/config/
https://stackoverflow.com/questions/68380194/tranform-vue-config-js-to-vite-config-js-build-path
 */
