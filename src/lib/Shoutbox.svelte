<script>
	import { formatRelative } from 'date-fns';
	import ModalShout from './modal/ModalShout.svelte';

	export let shouts;

	let shoutModal = false;
	let error = '';

	function openModalShout() {
		shoutModal = true;
	}

	function closeModalShout() {
		shoutModal = false;
	}

	function formatDate(date) {
		return formatRelative(new Date(date), new Date());
	}
</script>

<div class="shoutbox">
	<p class="shout-title">Shoutbox 📢</p>
	{#if error}
		<p class="error">{error}</p>
	{/if}
	<div class="shouts">
		{#if shouts.length > 0}
			{#each shouts as shout}
				<div class="shout">
					<p class="shouter">
						@{shout.name}:
						<span class="date">{formatDate(shout._createdAt)}</span>
					</p>
					<p class="shout-body">{shout.body}</p>
				</div>
			{/each}
		{:else}
			<p class="none">No shouts. Be the first!</p>
		{/if}
	</div>
	<div class="button-row">
		<button on:click={openModalShout}>🤘Leave a shout!🤘</button>
	</div>
</div>
{#if shoutModal}
	<ModalShout on:close-modal-shout={closeModalShout} bind:shouts />
{/if}

<style>
	.shoutbox {
		height: 300px;
		border: 4px solid var(--primary);
		border-radius: 8px;
		padding: 0.75rem;
		flex: 3 1 300px;
	}

	.shouts {
		height: 200px;
		overflow-y: scroll;
		border: 2px solid var(--primary);
		border-radius: 8px;
		margin-bottom: 8px;
	}

	.shout-title {
		font-weight: bold;
		line-height: 1rem;
		margin-bottom: 0.5rem;
	}

	.shout {
		padding: 0.5rem;
		border-bottom: 2px solid var(--primary);
	}

	.shouter {
		font-weight: bold;
		font-size: 0.85rem;
		color: var(--primary);
		line-height: 0.85rem;
	}

	.shout-body {
		margin-top: 0.5rem;
		font-weight: normal;
		color: var(--text);
		font-size: 0.85rem;
		line-height: 1rem;
	}

	.date {
		font-size: 0.75rem;
		font-weight: normal;
		float: right;
	}

	.button-row {
		display: flex;
		justify-content: center;
	}

	.button-row button {
		cursor: pointer;
		border: none;
		padding: 8px;
		width: 100%;
		color: var(--white);
		background-color: var(--primary);
		border-radius: 8px;
	}

	.button-row button:hover {
		background-color: var(--primary-hover);
	}

	.none {
		padding: 4px;
	}
</style>
