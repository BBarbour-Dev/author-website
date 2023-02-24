<script>
</script>

<svelte:head>
	<title>Brian Philip &middot; Home &middot; Progression Fantasy and Sci-Fi Author</title>
</svelte:head>
<div class="hero">
	<h1>I'm Brian Philip.</h1>
	<h2>A Progression Fantasy and Sci-Fi author.</h2>
</div>
<h3>About Me</h3>
<p class="about-me">
	Brian Philip lives in the rime-covered landscape of the North. He's a Software Engineer and
	work-at-home enthusiast. When he's not wrangling his pet corgi, you can find his nose deep in a
	book, his mind sculpting worlds and characters from imagination clay, or him bugging his wife
	about what's for dinner.
</p>

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
		margin: 2rem 0;
	}

	.posts {
		margin-bottom: 3rem;
	}

	.about-me {
		margin-bottom: 1rem;
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
