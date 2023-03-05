import { error } from '@sveltejs/kit';
import mailgun from 'mailgun-js';
import config from '../config';
import { sendMail } from '../actions/mail';
import { verifyOrAddEmailAddress } from '../helpers/addEmail';

const mg = mailgun({ apiKey: config.MAIL_API_KEY, domain: config.MAIL_SERVER });

export async function contact({ request }) {
	try {
		const data = await request.formData();
		const name = data.get('name');
		const mailto = data.get('email');
		const body = data.get('body');

		if (!body || !name || !mailto) {
			throw new error(400, 'Required fields are name/username, email, and message.');
		}

		await verifyOrAddEmailAddress({
			name,
			mailto
		});

		await sendMail({
			from: 'Delivery Moogle <contact@authorbrianphilip.com>',
			mailto: 'me@authorbrianphilip.com',
			subject: `A new message from the website! ${mailto}`,
			text: body
		});

		return 'sucess';
	} catch (err) {
		console.error(err);
		throw error(err.status, err.body.message);
	}
}
