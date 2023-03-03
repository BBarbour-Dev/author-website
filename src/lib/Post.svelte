<script>
	import { formatRelativeDate } from '../helpers/formatRelativeDate';
	import Tags from '../lib/Tags.svelte';
	export let post;
</script>

<div>
	<a href={`/blog/${post.slug.current}`}>{post.title}</a>
	<p>
		<Tags tags={post.tags} fontSize=".8" padding=".5" />
		Posted {formatRelativeDate(post.date)} <span class="middot">&middot;</span>
		{post.readingStats.time} minute read <span class="middot">&middot;</span>
		{post.readingStats.wordCount} words <span class="middot">&middot;</span>
		{post.commentNum}
		{post.commentNum === 1 ? 'comment' : 'comments'} <span class="middot">&middot;</span>
		{post.views} views
	</p>
</div>

<style>
	div {
		margin-bottom: 1.5rem;
	}

	a {
		font-size: 1.5rem;
		font-weight: bold;
	}

	div p {
		margin-top: 1rem;
		font-size: 1rem;
	}
</style>
