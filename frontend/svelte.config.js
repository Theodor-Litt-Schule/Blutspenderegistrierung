import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';



export default {
	preprocess: preprocess({
		scss: {
			prependData: `@import './src/routes/global.scss';`
		}
	}),
	kit: {
		adapter: adapter()
	}

};
