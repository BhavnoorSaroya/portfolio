import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const base = '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Preprocessors
	preprocess: vitePreprocess(),

	vitePlugin: {
		inspector: {
			showToggleButton: 'always'
		}
	},

	kit: {
		adapter: adapter({
			// Optional: If you want client-side routing fallback
			// (good for SPAs deployed on Nginx, Vercel, Netlify, etc.)
			fallback: 'index.html'
		}),
		alias: {
			$lib: './src/lib',
			'@data': './src/lib/data',
			'@components': './src/lib/components',
			'@md': './src/lib/md',
			'@stores': './src/lib/stores',
			'@utils': './src/lib/utils'
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? base : ''
		}
	}
};

export default config;


// import adapter from '@sveltejs/adapter-node';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// const base = '';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
// 	// for more information about preprocessors
// 	preprocess: vitePreprocess(),
// 	vitePlugin: {
// 		inspector: {
// 			showToggleButton: 'always'
// 		}
// 	},
// 	kit: {
// 		adapter: adapter({ fallback: '404.html' }),
// 		alias: {
// 			$lib: './src/lib',
// 			'@data': './src/lib/data',
// 			'@components': './src/lib/components',
// 			'@md': './src/lib/md',
// 			'@stores': './src/lib/stores',
// 			'@utils': './src/lib/utils'
// 		},
// 		paths: {
// 			base: process.env.NODE_ENV === 'production' ? base : ''
// 		}
// 	}
// };

// export default config;
