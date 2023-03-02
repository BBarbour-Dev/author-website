<script>
	import { formatRelativeDate } from '../../../helpers/formatRelativeDate';
	import Tags from '../../../lib/Tags.svelte';
	export let data;

	let { post } = data;
</script>

<svelte:head>
	<title>Brian Philip &middot; {post.title} &middot; Progression Fantasy and Sci-Fi Author</title>
</svelte:head>
<div class="hero" style="background-image: url('/hero/{post.heroImage}.svg') ">
	<h1 id="top">{post.title}</h1>
	<h2>{post.subtitle}</h2>
</div>
<Tags tags={post.tags} fontSize="1" />
<p class="posted">
	Posted {formatRelativeDate(post.created)} <span class="middot">&middot;</span>
	{post.readingStats.time} minute read <span class="middot">&middot;</span>
	{post.readingStats.wordCount} words <span class="middot">&middot;</span>
	{post.commentNum}
	{post.commentNum === 1 ? 'comment' : 'comments'} <span class="middot">&middot;</span>
	{post.views} views
</p>
<article class="post-body">
	{@html post.body}
	<div class="links">
		<a href="#top">Return to Top</a> <span class="middot">&middot;</span>
		<a href="/blog">Return To Blog</a>
	</div>
</article>

<style>
	.hero {
		margin-top: 3rem;
		margin-bottom: 1.5rem;
		background-color: var(--background-transparent);
		min-height: 16rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1rem;
		border: 2px solid var(--primary);
		border-radius: 8px;
	}

	h1 {
		line-height: 3rem;
		width: 75%;
		text-underline-offset: 0%;
	}

	.posted {
		margin: 1.5rem 0;
	}

	.links {
		margin-top: 3rem;
		text-align: center;
	}
</style>
