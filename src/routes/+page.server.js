import { client, queries } from '../db';
import { curatePosts } from '../helpers/curatePosts';
import { shout } from '../actions/shout';
import { getCommentNumForPosts } from '../helpers/getComments';

export async function load() {
	const shouts = await client.fetch(queries.shouts);
	let posts = await client.fetch(queries.lastFivePosts);
	let author = await client.fetch(queries.author);
	posts = await getCommentNumForPosts(posts);
	posts = curatePosts(posts);
	author = author[0];
	return {
		author,
		shouts,
		posts
	};
}

export const actions = {
	shout
};
