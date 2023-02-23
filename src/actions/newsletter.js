import { error } from '@sveltejs/kit';
import config from '../config/index';
import { client } from '../config/db';
import { sign, verify } from 'twt';

export async function subscribe({ cookies, request }) {
	try {
		const data = await request.formData();
		const name = data.get('name');
		const mailto = data.get('email');
		const emailName = mailto.split('@')[0];
		const _id = sign(emailName, config.TWT_SECRET);
		await client.createOrReplace({
			_type: 'emailAddress',
			_id,
			name,
			mailto,
			newsletter: true,
			promotions: true
		});
		cookies.set('hideNewsletterSignUp', true);
		return { hideNewsletterSignUp: true };
	} catch (err) {
		console.error(err);
		throw error(500, {
			message: 'Internal Server Error: Please try again.'
		});
	}
}

export async function unsubscribe(token) {
	try {
		const validToken = verify(token, config.TWT_SECRET);
		if (validToken) {
			await client
				.patch(token)
				.set({
					newsletter: false
				})
				.commit();
		}
	} catch (err) {
		throw error(500, {
			message: 'Invalid unsubscription attempt.'
		});
	}
}

export async function unsubscribePromotions(token) {
	try {
		const validToken = verify(token, config.TWT_SECRET);
		if (validToken) {
			await client
				.patch(token)
				.set({
					promotions: false
				})
				.commit();
		}
	} catch (err) {
		throw error(500, {
			message: 'Invalid unsubscription attempt.'
		});
	}
}
