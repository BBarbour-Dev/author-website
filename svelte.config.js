import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			edge: true
		}),
		csrf: {
			checkOrigin: false
		}
	}
};

export default config;
