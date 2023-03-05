import MarkdownIt from 'markdown-it';

const md = MarkdownIt();

function getReadingStats(post) {
	const avgWordsPerMin = 275;
	const wordCount = post.match(/\w+/g).length;
	const time = Math.ceil(wordCount / avgWordsPerMin);
	return {
		wordCount,
		time
	};
}

export function curatePosts(posts) {
	return posts.map((post) => {
		const readingStats = getReadingStats(post.bodyMarkdown);
		const htmlBody = md.render(post.bodyMarkdown);
		console.log(post._createdAt);
		return {
			slug: post.slug.current,
			created: post._createdAt,
			heroImage: post.heroImage,
			postId: post._id,
			title: post.title,
			subtitle: post.subtitle ? post.subtitle : '',
			views: post.views,
			comments: post.list ? post.list : [],
			commentNum: post.commentNum,
			body: htmlBody,
			tags: [post.tag],
			readingStats
		};
	});
}
