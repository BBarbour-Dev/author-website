import { client, queries } from '../db';
import { shout } from '../actions/shout';

export async function load() {
	const author = await client.fetch(queries.author);
	const shouts = await client.fetch(queries.shouts);
	return {
		author: author[0],
		shouts
	};
}

export const actions = {
	shout
};
