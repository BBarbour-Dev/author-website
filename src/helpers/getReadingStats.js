export function getReadingStats(post) {
	const avgWordsPerMin = 275;
	const wordCount = post.match(/\w+/g).length;
	const time = Math.ceil(wordCount / avgWordsPerMin);

	return {
		wordCount,
		time
	};
}
