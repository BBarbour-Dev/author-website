import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	checkOrigin: false,
	kit: {
		adapter: adapter()
	}
};

export default config;
