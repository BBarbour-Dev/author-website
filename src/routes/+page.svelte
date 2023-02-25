<script>
	import Shoutbox from '../lib/Shoutbox.svelte';
	export let data;
	let { author, shouts } = data;
</script>

<svelte:head>
	<title>Brian Philip &middot; Home &middot; Progression Fantasy and Sci-Fi Author</title>
</svelte:head>
<div class="hero">
	<h1>I'm Brian Philip.</h1>
	<h2>A Progression Fantasy and Sci-Fi author.</h2>
</div>
<h3>About Me</h3>
<div class="row">
	<img src={author.avatar} alt="Brian Philip" class="avatar" />
	<p class="about-me">
		{author.bio}
	</p>
	<Shoutbox {shouts} />
</div>

<style>
	.hero {
		margin: 3rem 0;
		background-image: url('/hero/clouds.svg');
		background-color: var(--background-transparent);
		min-height: 16rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1rem;
		border: 4px solid var(--primary);
		border-radius: 8px;
	}

	.row {
		display: flex;
		align-items: flex-start;
		gap: 1.5rem;
		flex-wrap: wrap;
		width: 100%;
	}

	.avatar {
		flex-basis: 1;
		width: 150px;
		height: 150px;
		border-radius: 50%;
	}

	.about-me {
		flex: 2 1 400px;
		text-align: justify;
	}

	h1 {
		color: var(--text);
	}

	h2 {
		margin-top: 1rem;
		color: var(--off-white);
	}

	h3 {
		color: var(--primary);
		width: 250px;
		margin-bottom: 2rem;
	}

	.posts {
		margin-bottom: 3rem;
	}

	.right {
		text-align: right;
		margin-bottom: 5rem;
	}

	@media screen and (max-width: 720px) {
		.hero {
			margin-top: 1rem;
		}
	}
</style>
