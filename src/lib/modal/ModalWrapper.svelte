<script>
	import { createEventDispatcher } from 'svelte';

	export let eventName;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch(eventName);
	}
</script>

<div class="background" on:click={handleClick} on:keydown={handleClick} />
<div class="modal">
	<slot {eventName} />
</div>

<style>
	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
	}

	.modal {
		position: fixed;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4rem);
		max-width: 512px;
		max-height: 700px;
		overflow: auto;
		transform: translate(-50%, -50%);
		padding: 1rem;
		background-color: var(--primary);
		color: var(--background);
		border-radius: var(--border-radius);
	}
</style>
