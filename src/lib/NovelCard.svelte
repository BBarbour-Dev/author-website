<script>
	import MouseTooltip from './MouseTooltip.svelte';
	import Tags from './Tags.svelte';
	export let novel;
</script>

<MouseTooltip text="Click to view on Amazon.">
	<a href={novel.url} class="card" target="_blank" rel="noopener noreferrer">
		<div class="cover-image">
			<img alt={novel.title} src="{novel.cover}?h=500" />
		</div>
		<div class="content">
			<h2>{novel.title}</h2>
			<p>
				Published: {new Date(novel.published).toLocaleDateString()}
				<span class="middot">&middot</span>
				{novel.pages} Pages
			</p>
			<p>
				<strong>${novel.priceUsd.toFixed(2)}</strong> <span class="middot">&middot</span>
				{novel.ku && 'Free On Kindle Unlimited'}
			</p>
			<div class="genres">
				<Tags tags={novel.genres} fontSize=".8" />
			</div>
			<p class="description">{novel.description}</p>
		</div>
	</a>
</MouseTooltip>

<style>
	h2 {
		font-size: 2rem;
		margin-bottom: 0.5rem;
		color: var(--primary);
		font-family: 'SpecialElite';
	}

	.card {
		text-decoration: none;
		color: var(--text);
		padding: 1.5rem;
		border-radius: 8px;
		border: 2px solid var(--primary);
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 4rem;
	}

	.card:hover {
		border: 2px solid var(--white);
	}

	.cover-image {
		height: 500px;
	}

	.cover-image img {
		height: 100%;
		border-radius: 8px;
	}

	.content {
		flex: 2;
	}

	.content p {
		margin-bottom: 0.5rem;
		text-align: justify;
	}

	.genres {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 0.5rem;
	}
</style>
