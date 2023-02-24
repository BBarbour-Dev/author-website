import { json } from '@sveltejs/kit';
import { client } from '../../../config/db';
import config from '../../../config';
import { generateHtmlTemplate, sendMail } from '../../../emailTemplates/newsletter';

const unsubNewsletter = 'newsletter?/unsubscribe';
const unsubPromotion = 'newsletter?/unsubscribe/promotions';

function getUnsubPath(template) {
	switch (template) {
		case 'Newsletter':
			return unsubNewsletter;
		case 'Promotion':
			return unsubPromotion;
	}
}

export async function POST(event) {
	try {
		console.log('firing emails!');
		const doc = await event.request.json();
		const toSend = [];

		const emails = await client.fetch(
			`*[_type == "emailAddress" && ${doc.template.toLowerCase()} == true]`
		);

		emails.forEach((email) => {
			console.log('email doc', email);
			toSend.push({
				mailto: email.mailto,
				html: generateHtmlTemplate({
					body: doc.bodyMarkdown,
					id: email._id,
					unsubPath: getUnsubPath(doc.template),
					env: config.ENV
				}),
				template: doc.template
			});
		});

		if (config.ENV === 'dev') {
			return console.log(toSend);
		}

		for (let i = 0; i === toSend.length; i++) {
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
		return json(err);
	}
}
