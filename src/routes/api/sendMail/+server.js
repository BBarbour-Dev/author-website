import { json } from '@sveltejs/kit';
import { client } from '../../../config/db';
import { generateMail } from '../../../emailTemplates/newsletter';

export async function POST(event) {
	console.log('firing emails!');
	const doc = await event.request.json();

	let emails = [];

	if (doc.template === 'Newsletter') {
		emails = await client.fetch('*[_type == "emailAddress" && newsletter == true]');
		emails.forEach((email) => {
			let html = generateMail(doc.bodyMarkdown, email._id, 'newsletter?/unsubscribe');
			if (config.ENV === 'dev') {
				console.log(html);
			}
		});
	} else if (doc.template === 'Promotion') {
		emails = await client.fetch('*[_type == "emailAddress" && promotions == true]');
		emails.forEach((email) => {
			let html = generateMail(doc.bodyMarkdown, email._id, 'newsletter?/unsubscribe/promotions');
			if (config.ENV === 'dev') {
				console.log(html);
			}
		});
	}
	return json(true);
}
