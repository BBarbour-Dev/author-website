import { client, queries } from '../../db';
import { curatePosts } from '../../helpers/curatePosts';
import { getCommentNumForPosts } from '../../helpers/getComments';

export async function load() {
	const posts = await client.fetch(queries.posts);
	const postsWithCommentNum = await getCommentNumForPosts(posts);
	const curatedPosts = curatePosts(postsWithCommentNum);
	return {
		posts: curatedPosts
	};
}
