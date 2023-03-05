import { client, queries } from '../db';

async function getCommentsById({ postId, commentId }) {
	console.log(postId);
	let comments = [];
	let commentNum = 0;

	if (postId) {
		comments = await client.fetch(queries.commentsByPost, {
			postId
		});
		commentNum = await getCommentNum(postId);
	}

	if (commentId) {
		comments = await client.fetch(queries.repliesByComment, {
			commentId
		});
	}

	return {
		list: comments,
		commentNum
	};
}

async function getCommentNum(postId) {
	return await client.fetch(queries.commentNumByPost, {
		postId
	});
}

export async function getCommentsForPosts(posts) {
	const postPromises = posts.map(async (post) => {
		const parentComments = await getCommentsById({ postId: post._id });
		console.log(parentComments);
		const { commentNum } = parentComments;
		const parentAndChildCommentsPromises = parentComments.list.map(async (comment) => {
			const replies = await getCommentsById({ commentId: comment._id });
			const commentWithReplies = {
				...comment,
				list: replies.list
			};
			return commentWithReplies;
		});
		const list = await Promise.all(parentAndChildCommentsPromises);
		return {
			...post,
			list,
			commentNum
		};
	});

	return await Promise.all(postPromises);
}

export async function getCommentsByPostId(postId) {
	const parentComments = await getCommentsById({ postId });
	const parentAndChildCommentsPromises = parentComments.list.map(async (comment) => {
		const replies = await getCommentsById({ commentId: comment._id });
		const commentWithReplies = {
			...comment,
			list: replies.list
		};
		return commentWithReplies;
	});
	return await Promise.all(parentAndChildCommentsPromises);
}

export async function getCommentNumForPosts(posts) {
	const postPromises = posts.map(async (post) => {
		const commentNum = await getCommentNum(post._id);
		return {
			...post,
			commentNum
		};
	});

	return await Promise.all(postPromises);
}
