import { sign } from 'twt';
import { client, queries } from '../db';
import config from '../config';

async function addEmail({ name, mailto, newsletter, promotions }) {
	const address = mailto.split('@')[0];
	const _id = sign(address, config.TWT_SECRET);
	return await client.createOrReplace({
		_type: 'emailAddress',
		_id,
		name,
		mailto,
		newsletter,
		promotions
	});
}

export async function verifyOrAddEmailAddress({ name, mailto, subscribe }) {
	let emailAddressExists = await client.fetch(queries.emailAddress, {
		mailto
	});

	if (emailAddressExists.length === 0) {
		emailAddressExists = await addEmail({
			name,
			mailto,
			newsletter: subscribe,
			promotions: subscribe
		});
	}

	return Array.isArray(emailAddressExists) ? emailAddressExists[0] : emailAddressExists;
}
