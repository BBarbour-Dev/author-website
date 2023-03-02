import { client, queries } from '../db';
import { curatePosts } from '../helpers/curatePosts';
import { shout } from '../actions/shout';

export async function load() {
	const author = await client.fetch(queries.author);
	const shouts = await client.fetch(queries.shouts);
	const posts = await client.fetch(queries.lastFivePosts);

	const curatedPosts = curatePosts(posts);
	return {
		author: author[0],
		shouts,
		posts: curatedPosts
	};
}

export const actions = {
	shout
};
