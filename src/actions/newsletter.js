import { error } from '@sveltejs/kit';
import { verify } from 'twt';
import config from '../config';
import { client } from '../db';
import { verifyOrAddEmailAddress } from '../helpers/addEmail';

export async function subscribe({ cookies, request }) {
	try {
		const data = await request.formData();
		const name = data.get('name');
		const mailto = data.get('email');

		if (!name || !mailto) {
			throw new error(400, 'Required fields are display name and email.');
		}

		await verifyOrAddEmailAddress({
			name,
			mailto,
			subscribe: true
		});

		cookies.set('hideNewsletterSignUp', true);
		return { hideNewsletterSignUp: true };
	} catch (err) {
		console.error(err);
		throw error(err.status, err.body.message);
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
