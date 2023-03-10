import { json } from '@sveltejs/kit';
import MarkdownIt from 'markdown-it';
import { client, queries } from '../../../db';
import config from '../../../config';
import { generateHtmlTemplate, sendMail } from '../../../actions/mail';

const md = MarkdownIt();

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
		console.log('Bulk email request starting...');
		const doc = await event.request.json();
		const toSend = [];

		const emails = await client.fetch(
			queries.emailAddressesForTemplate(doc.template.toLowerCase())
		);

		for (let i = 0; i < emails.length; i++) {
			const email = emails[i];
			toSend.push({
				mailto: email.mailto,
				template: doc.template,
				subject: doc.subject,
				html: await generateHtmlTemplate({
					name: email.name,
					body: md.render(doc.bodyMarkdown),
					id: email._id,
					unsubPath: getUnsubPath(doc.template)
				})
			});
		}

		if (config.ENV === 'dev') {
			return console.log(toSend);
		}

		for (let i = 0; i < toSend.length; i++) {
			const email = toSend[i];
			await sendMail({
				from: `Brian Philip <me@authorbrianphilip.com>`,
				mailto: email.mailto,
				subject: email.subject,
				html: email.html,
				address: 'me'
			});
		}

		console.log('Bulk email request finished.');
		return json(toSend);
	} catch (err) {
		console.error(err);
		return json(err);
	}
}
