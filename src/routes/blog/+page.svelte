<script>
	import Post from '../../lib/Post.svelte';

	export let data;
	const { posts } = data;
</script>

<svelte:head>
	<title>Brian Philip &middot; Blog &middot; Progression Fantasy and Sci-Fi Author</title>
</svelte:head>
<h1 id="#top">Blog</h1>
<div>
	{#if posts}
		{#each posts as post}
			<Post {post} />
		{/each}
	{/if}
</div>
<div class="links">
	{#if posts && posts.length > 10}
		<a href="#top">Return to Top</a>
	{/if}
</div>

<style>
	h1 {
		color: var(--primary);
		padding-bottom: 1rem;
		margin: 3rem 0;
		font-family: 'SpecialElite';
		line-height: 3rem;
	}

	.links {
		margin-top: 3rem;
		text-align: center;
	}
</style>
