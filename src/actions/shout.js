import { error } from '@sveltejs/kit';
import { client, queries } from '../db';
import { verifyOrAddEmailAddress } from '../helpers/addEmail';

export async function shout({ request }) {
	try {
		const data = await request.formData();

		const name = data.get('name');
		const mailto = data.get('email');
		const body = data.get('body');

		if (!body || !name || !mailto) {
			throw new error(400, 'Required fields are name/username, email, and message.');
		}

		if (body.length > 200) {
			throw new error(400, 'Limit 200 characters per shout.');
		}

		body.replace(/(\r\n|\n|\r)/gm, '');
		body.trim();

		const emailAddressExists = await verifyOrAddEmailAddress({
			name,
			mailto,
			subscribe
		});

		const newShout = await client.create({
			_type: 'shout',
			name,
			emailAddress: {
				_ref: emailAddressExists._id
			},
			body,
			hidden: false
		});

		const shouts = await client.fetch(queries.shouts);

		shouts.unshift({
			_createdAt: newShout._createdAt,
			body: newShout.body,
			name: newShout.name
		});

		return { hideNewsletterSignUp: subscribe, shouts };
	} catch (err) {
		console.error(err);
		throw error(err.status, err.body.message);
	}
}
