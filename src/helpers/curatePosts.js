import { getReadingStats } from './getReadingStats';

export function curatePosts(posts) {
	return posts.map((post) => {
		const readingStats = getReadingStats(post.bodyMarkdown);
		const tags = post.tag ? [post.tag] : [];
		return {
			title: post.title,
			slug: post.slug,
			date: post._createdAt,
			views: post.views,
			commentNum: 0,
			tags,
			readingStats
		};
	});
}
