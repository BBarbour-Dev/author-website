import { client, queries } from '../../db';

export async function load() {
	const novels = await client.fetch(queries.novels);
	return {
		novels
	};
}
