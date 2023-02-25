import config from '../config/index';
import mailgun from 'mailgun-js';
import _ from 'underscore';

const mg = mailgun({ apiKey: config.MAIL_API_KEY, domain: config.MAIL_SERVER });

export async function sendMail({ mailto, subject, html, template }) {
	const mail = {
		from: `${template.toLowerCase()}@authorbrianphilip.com`,
		to: mailto,
		subject,
		html
	};

	const sentMail = await mg.messages().send(mail);
	console.log('Sending mail...', sentMail);
}

export function generateHtmlTemplate({ name, body, id, unsubPath }) {
	const generic = import('./generic.html?raw');
	console.log(name, body, id, unsubPath);
	return _.template(generic, {
		name,
		body,
		id,
		unsubPath
	});
}
