import { error } from '@sveltejs/kit';
import MarkdownIt from 'markdown-it';
import { client, queries } from '../../../db';
import { getReadingStats } from '../../../helpers/getReadingStats';

const md = MarkdownIt();

export async function load({ params }) {
	try {
		const { slug } = params;
		const query = await client.fetch(queries.postBySlug, {
			slug
		});

		const post = query[0];

		await client.patch(post._id).inc({ views: 1 }).commit();

		const body = md.render(post.bodyMarkdown);
		const readingStats = getReadingStats(post.bodyMarkdown);
		const tags = post.tag ? [post.tag] : [];

		return {
			post: {
				title: post.title,
				subtitle: post.subtitle,
				created: post._createdAt,
				heroImage: post.heroImage,
				tags,
				body,
				readingStats,
				commentNum: 0,
				coments: [],
				views: post.views + 1
			}
		};
	} catch (err) {
		console.error(err);
		throw error(err.statusCode);
	}
}
