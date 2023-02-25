import config from '../config/index';
import mailgun from 'mailgun-js';
import generic from './generic.html';

const mg = mailgun({ apiKey: config.MAIL_API_KEY, domain: config.MAIL_SERVER });

export async function sendMail({ mailto, subject, html, template }) {
	const mail = {
		from: `${template.toLowerCase()}@authorbrianphilip.com`,
		to: mailto,
		subject,
		html
	};

	// const sentMail = await mg.messages().send(mail);
	// console.log(sentMail);
}

export function generateHtmlTemplate({ body, id, unsubPath, env }) {
	console.log(generic);
	// load html
	// render template with lodash
	// return template string
	return 'This is a test';
}
