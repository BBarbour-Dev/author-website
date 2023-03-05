import { error } from '@sveltejs/kit';
import { verifyOrAddEmailAddress } from '../helpers/addEmail';
import { client } from '../db';
import { getCommentsByPostId } from '../helpers/getComments';

export async function comment({ request }) {
	try {
		const data = await request.formData();
		const name = data.get('name');
		const mailto = data.get('email');
		const body = data.get('body');
		const postId = data.get('postId');
		const commentId = data.get('commentId');

		if (!body || !name || !mailto) {
			throw new error(400, 'Required fields are display name, email, and comment.');
		}

		const emailAddressExists = await verifyOrAddEmailAddress({
			name,
			mailto,
			subscribe: false
		});

		const comment = {
			_type: 'comment',
			body,
			hidden: false,
			emailAddress: {
				_ref: emailAddressExists._id
			},
			post: {
				_ref: postId
			}
		};

		if (commentId) {
			comment.parentComment = {
				_ref: commentId
			};
		}

		const newComment = await client.create(comment);

		const comments = await getCommentsByPostId(postId);

		comments.unshift({
			_createdAt: newComment._createdAt,
			name: newComment.name,
			_id: newComment._id,
			body: newComment.body
		});

		return {
			comments
		};
	} catch (err) {
		console.error(err);
		throw error(500, 'server error');
	}
}
