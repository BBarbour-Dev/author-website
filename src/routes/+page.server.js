export const actions = {
	newsletter: async ({ cookies, request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');

		console.log('name', name);
		console.log('email', email);

		cookies.set('hideNewsletterSignUp', true);
		return { hideNewsletterSignUp: true };
	}
};
