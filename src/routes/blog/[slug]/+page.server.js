import { error } from '@sveltejs/kit';
import { comment } from '../../../actions/comment';
import { client, queries } from '../../../db';
import { getCommentsForPosts } from '../../../helpers/getComments';
import { curatePosts } from '../../../helpers/curatePosts';

export async function load({ params }) {
	try {
		const { slug } = params;
		let posts = await client.fetch(queries.postBySlug, {
			slug
		});

		posts = await getCommentsForPosts(posts);
		posts = await curatePosts(posts);
		const post = posts[0];
		post.views = post.views + 1;
		await client.patch(post.postId).inc({ views: 1 }).commit();
		return {
			post
		};
	} catch (err) {
		console.error(err);
		throw error(500);
	}
}

export const actions = {
	comment
};
