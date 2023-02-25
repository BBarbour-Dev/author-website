import { client } from '../config/db';

export async function load() {
	const author = await client.fetch(
		'*[_type == "author" && name == "Brian Philip"]{..., "avatar": avatar.asset->url}'
	);
	const shouts = await client.fetch('*[_type == "shout" && !hidden]{_createdAt, body, name}');
	return {
		author: author[0],
		shouts
	};
}
