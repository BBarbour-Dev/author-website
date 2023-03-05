<script>
	export let text;

	let isHovered = false;
	let top = 0;
	let left = 0;

	function mouseOver(e) {
		isHovered = true;
		left = e.pageX + 5;
		top = e.pageY + 5;
	}

	function mouseMove(e) {
		left = e.pageX + 5;
		top = e.pageY + 5;
	}

	function mouseLeave() {
		isHovered = false;
	}
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="container" on:mouseover={mouseOver} on:mouseleave={mouseLeave} on:mousemove={mouseMove}>
	<slot />
</div>
{#if isHovered}
	<div class="tooltip" style="top: {top}px; left: {left}px;">{text}</div>
{/if}

<style>
	.tooltip {
		padding: 0.5rem;
		font-size: 1rem;
		position: absolute;
		background-color: var(--highlight);
		box-shadow: 8px, 4px, 4px var(--dark);
		border-radius: var(--border-radius);
	}
</style>
