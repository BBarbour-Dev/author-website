<script>
	import Shoutbox from '../lib/Shoutbox.svelte';
	import Post from '../lib/Post.svelte';
	export let data;
	let { author, shouts, posts } = data;
</script>

<svelte:head>
	<title>Brian Philip &middot; Home &middot; Progression Fantasy and Sci-Fi Author</title>
</svelte:head>
<div class="hero">
	<h1>Progression Fantasy and Sci-Fi Author.</h1>
</div>
<h3>About Me</h3>
<div class="row">
	<img src={author.avatar} alt="Brian Philip" class="avatar" />
	<p class="about-me">
		{author.bio}
	</p>
</div>
<h3>Blog</h3>
<div class="row">
	<div class="posts">
		{#if posts && posts.length > 0}
			{#each posts as post}
				<Post {post} />
			{/each}
		{:else}
			<p>There are no posts.</p>
		{/if}
	</div>
	<a href="/blog" class="view">...View All Posts</a>
</div>
<div class="row">
	<Shoutbox bind:shouts />
</div>

<style>
	@media screen and (max-width: 720px) {
		.hero {
			margin-top: 1rem;
		}
	}

	h1 {
		color: var(--text);
	}

	/* h2 {
		margin-top: 1rem;
		color: var(--off-white);
	} */

	h3 {
		color: var(--primary);
		font-family: 'SpecialElite';
	}

	.hero {
		margin: 3rem 0;
		background-image: url('/hero/signal.svg');
		background-color: var(--background-transparent);
		min-height: 16rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1rem;
		border: 2px solid var(--primary);
		border-radius: 8px;
	}

	.row {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		flex-wrap: wrap;
		margin-bottom: 3rem;
	}

	.avatar {
		flex-basis: 1;
		width: 150px;
		height: 150px;
		border-radius: 50%;
	}

	.about-me {
		flex: 1;
		text-align: justify;
	}

	.view {
		flex: 1;
	}

	.posts {
		width: 100%;
	}
</style>
