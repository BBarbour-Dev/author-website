import config from '../config';
import mailgun from 'mailgun-js';
import _ from 'underscore';

const mg = mailgun({ apiKey: config.MAIL_API_KEY, domain: config.MAIL_SERVER });

export async function sendMail({ mailto, subject, html, text, from }) {
	const mail = {
		from,
		to: mailto,
		subject,
		text,
		html: html && html
	};

	const test = await mg.messages().send(mail);
}

export async function generateHtmlTemplate({ name, body, id, unsubPath }) {
	const generic = await import('./emailTemplates/generic.html?raw');
	const template = _.template(generic.default);
	const rendered = template({
		name,
		body,
		id,
		unsubPath
	});
	return rendered;
}
