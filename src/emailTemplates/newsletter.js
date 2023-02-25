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

export async function generateHtmlTemplate({ name, body, id, unsubPath }) {
	const generic = await import('./generic.html?raw');
	console.log(generic.default);
	return _.template(generic.default, {
		name,
		body,
		id,
		unsubPath
	});
}
