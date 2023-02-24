import { json, error } from '@sveltejs/kit';
import { client } from '../../../config/db';
import config from '../../../config';
import { generateMail, sendMail } from '../../../emailTemplates/newsletter';

export async function POST(event) {
	try {
		console.log('firing emails!');
		const doc = await event.request.json();
		const toSend = [];

		if (doc.template === 'Newsletter') {
			const emails = await client.fetch('*[_type == "emailAddress" && newsletter == true]');

			emails.forEach((email) => {
				const html = generateMail(doc.bodyMarkdown, email._id, 'newsletter?/unsubscribe');
				console.log(email);
				toSend.push({
					mailto: email.mailto,
					html,
					template: doc.template
				});
			});
		} else if (doc.template === 'Promotion') {
			emails = await client.fetch('*[_type == "emailAddress" && promotions == true]');
			emails.forEach((email) => {
				console.log(email);
				const html = generateMail(
					doc.bodyMarkdown,
					email._id,
					'newsletter?/unsubscribe/promotions'
				);
				toSend.push({
					mailto: email.mailto,
					html,
					template: doc.template
				});
			});
		}

		if (config.ENV === 'dev') {
			return console.log(toSend);
		}

		for (let i = 0; i <= toSend.length; i++) {
			await sendMail({
				mailto: toSend[i].mailto,
				subject: doc.subject,
				html: toSend[i].html,
				template: doc.template
			});
		}

		return json(toSend);
	} catch (err) {
		console.error(err);
		error(500, 'Internal server error.');
	}
}
