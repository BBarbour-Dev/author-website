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
		gap: 0.5rem;
	}

	.tag span {
		font-weight: bold;
		background-color: var(--primary);
		border-radius: 8px;
		color: var(--white);
		line-height: 0.8rem;
	}
</style>
