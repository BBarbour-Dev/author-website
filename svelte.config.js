import adapter from '@sveltejs/adapter-netlify';

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
