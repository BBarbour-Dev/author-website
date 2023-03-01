import { sign } from 'twt';
import { client } from '../db';
import config from '../config';

export async function addEmail({ name, mailto, newsletter, promotions }) {
	const address = mailto.split('@')[0];
	const _id = sign(address, config.TWT_SECRET);
	return await client.create({
		_type: 'emailAddress',
		_id,
		name,
		mailto,
		newsletter,
		promotions
	});
}
