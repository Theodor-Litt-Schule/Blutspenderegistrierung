import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import fs from 'fs';

export default defineConfig({
	plugins: [sveltekit()],
	preview: {
		port: 3000,
		strictPort: true,
		host: '0.0.0.0',
		allowedHosts: true,
	},
	server: {
		allowedHosts: true
	},
});
