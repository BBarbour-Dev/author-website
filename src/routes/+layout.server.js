export async function load({ cookies }) {
	const hideNewsletterSignUp = await cookies.get('hideNewsletterSignUp');
	return {
		hideNewsletterSignUp: hideNewsletterSignUp ? hideNewsletterSignUp : false
	};
}
