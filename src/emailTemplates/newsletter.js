import config from '../config/index';
import mailgun from 'mailgun-js';
import _ from 'underscore';

const mg = mailgun({ apiKey: config.MAIL_API_KEY, domain: config.MAIL_SERVER });

export async function sendMail({ mailto, subject, html }) {
	const mail = {
		from: `me@authorbrianphilip.com`,
		to: mailto,
		subject,
		html
	};

	await mg.messages().send(mail);
	console.log(`Sending mail to... ${mailto}`);
}

export async function generateHtmlTemplate({ name, body, id, unsubPath }) {
	const generic = await import('./generic.html?raw');
	const template = _.template(generic.default);
	const rendered = template({
		name,
		body,
		id,
		unsubPath
	});
	return rendered;
}
