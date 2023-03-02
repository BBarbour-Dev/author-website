import { error } from '@sveltejs/kit';
import { client, queries } from '../db';
import { addEmail } from '../helpers/addEmail';

export async function shout({ cookies, request }) {
	try {
		const data = await request.formData();

		let name = data.get('name');
		let mailto = data.get('email');
		let subscribe = data.get('subscribe') && true;
		let message = data.get('body');

		if (!message || !name || !mailto) {
			throw new error(400, 'Required fields are name/username, email, and message.');
		}

		if (message.length > 200) {
			throw new error(400, 'Limit 200 characters per message.');
		}

		message.replace(/(\r\n|\n|\r)/gm, '');
		message.trim();

		let emailAddressExists = await client.fetch(queries.emailAddress, {
			mailto
		});

		if (emailAddressExists.length === 0) {
			emailAddressExists = await addEmail({
				name,
				mailto,
				newsletter: subscribe,
				promotions: subscribe
			});
		}

		if (subscribe) {
			cookies.set('hideNewsletterSignUp', true);
		}

		await client.create({
			_type: 'shout',
			name,
			emailAddress: {
				_ref: emailAddressExists._id
			},
			body: message,
			hidden: false
		});

		const shouts = await client.fetch(queries.shouts);

		if (subscribe) {
			cookies.set('hideNewsletterSignUp', true);
		}
		return { hideNewsletterSignUp: subscribe, shouts };
	} catch (err) {
		console.error(err);
		throw error(err.status, err.body.message);
	}
}
