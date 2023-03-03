<script>
	export let tags;
	export let fontSize;
	export let padding;
</script>

<div class="tag">
	{#each tags as tag}
		<p>
			<span style="font-size: {fontSize}rem; padding: {padding ? padding : fontSize}rem;"
				>{tag}</span
			>
			<slot />
		</p>
	{/each}
</div>

<style>
	.tag {
		display: inline-flex;
		flex-wrap: wrap;
	}

	.tag span {
		margin-right: 0.5rem;
		font-weight: 500;
		background-color: var(--highlight);
		border-radius: 8px;
		color: var(--white);
	}
</style>
