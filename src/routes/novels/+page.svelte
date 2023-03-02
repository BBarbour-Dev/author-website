<script>
	import NovelCard from '../../lib/NovelCard.svelte';
	export let data;
	const { novels } = data;
</script>

<svelte:head>
	<title>Brian Philip &middot; Novels &middot; Progression Fantasy and Sci-Fi Author</title>
</svelte:head>
<h1>My Novels</h1>
{#each novels as novel}
	<NovelCard {novel} />
{/each}

<style>
	h1 {
		color: var(--primary);
		padding-bottom: 1rem;
		margin: 3rem 0;
		font-family: 'SpecialElite';
		line-height: 3rem;
	}
</style>
