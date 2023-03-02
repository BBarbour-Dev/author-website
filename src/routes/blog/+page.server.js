import { client, queries } from '../../db';
import { curatePosts } from '../../helpers/curatePosts';

export async function load() {
	const posts = await client.fetch(queries.posts);
	const curatedPosts = curatePosts(posts);
	return {
		posts: curatedPosts
	};
}
