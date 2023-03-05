<script>
	import Tags from '../../../lib/Tags.svelte';
	import Comment from '../../../lib/Comment.svelte';
	import CommentForm from '../../../lib/CommentForm.svelte';
	import { formatRelativeDate } from '../../../helpers/formatRelativeDate';

	export let data;

	let { post } = data;
	let { comments } = post;
</script>

<svelte:head>
	<title>Brian Philip &middot; {post.title} &middot; Progression Fantasy and Sci-Fi Author</title>
</svelte:head>
<div class="hero" style="background-image: url('/hero/{post.heroImage}.svg') ">
	<h1 id="top">{post.title}</h1>
	<h2>{post.subtitle}</h2>
</div>
<Tags tags={post.tags} fontSize="1" padding=".65" />
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
	<hr />
	<section class="comments">
		<h3>Comments</h3>
		<div class="container">
			<CommentForm postId={post.postId} bind:comments />
		</div>
		<div class="container">
			{#if comments}
				{#each comments as comment}
					<Comment {comment} postId={post.postId} bind:comments>
						{#each comment.list as replyComment}
							<Comment comment={replyComment} postId={post.postId} parent={false} />
						{/each}
					</Comment>
				{/each}
			{:else}
				<p>There are no comments. Be the first!</p>
			{/if}
		</div>
	</section>
	<div class="links">
		<a href="#top">Return to Top</a> <span class="middot">&middot;</span>
		<a href="/blog">Return To Blog</a>
	</div>
</article>

<style>
	.hero {
		margin-top: 3rem;
		margin-bottom: 1.5rem;
		min-height: 16rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1rem;
		border: 2px solid var(--primary);
		border-radius: var(--border-radius);
	}

	h1 {
		line-height: 3rem;
		width: 75%;
		text-underline-offset: 0%;
	}

	h2 {
		margin-top: 1.5rem;
		color: var(--off-white);
	}

	.comments h3 {
		font-family: 'SpecialElite';
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.posted {
		margin: 1.5rem 0;
	}

	.links {
		margin-top: 6rem;
		text-align: center;
	}
</style>
