import { error } from '@sveltejs/kit';
import mailgun from 'mailgun-js';
import config from '../config';
import { client, queries } from '../db';
import { sendMail } from '../actions/mail';
import { addEmail } from '../helpers/addEmail';

const mg = mailgun({ apiKey: config.MAIL_API_KEY, domain: config.MAIL_SERVER });

export async function contact({ cookies, request }) {
	try {
		const data = await request.formData();
		let name = data.get('name');
		let mailto = data.get('email');
		let message = data.get('body');

		if (!message || !name || !mailto) {
			throw new error(400, 'Required fields are name/username, email, and message.');
		}

		let emailAddressExists = await client.fetch(queries.emailAddress, {
			mailto
		});

		if (emailAddressExists.length === 0) {
			emailAddressExists = await addEmail({
				name,
				mailto,
				newsletter: true,
				promotions: true
			});
		}

		await sendMail({
			from: 'contact@authorbrianphilip.com',
			mailto: 'me@authorbrianphilip.com',
			subject: `A new message from the website! ${mailto}`,
			text: message
		});

		return 'sucess';
	} catch (err) {
		console.error(err);
		throw error(err.status, err.body.message);
	}
}
