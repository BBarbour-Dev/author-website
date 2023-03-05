<script>
	import { getCapitalizedDateString } from '../helpers/getCapitalizedDateString';
	import ShoutForm from './ShoutForm.svelte';

	export let shouts;

	let error = '';
</script>

<div class="shoutbox">
	<h3 class="shout-title">Shoutbox</h3>
	{#if error}
		<p class="error">{error}</p>
	{/if}
	<div class="shouts">
		{#if shouts.length > 0}
			{#each shouts as shout}
				<div class="shout">
					<p class="shouter">
						@{shout.name}:
						<span class="date">{getCapitalizedDateString(shout._createdAt)}</span>
					</p>
					<p class="shout-body">{shout.body}</p>
				</div>
			{/each}
		{:else}
			<p class="none">No shouts. Be the first!</p>
		{/if}
	</div>
	<ShoutForm bind:shouts />
</div>

<style>
	h3 {
		color: var(--primary);
		font-family: 'SpecialElite';
	}

	.shoutbox {
		width: 100%;
	}

	.shouts {
		height: 250px;
		overflow-y: scroll;
		border: 2px solid var(--primary);
		border-radius: var(--border-radius);
		margin-bottom: 1rem;
	}

	.shout-title {
		font-weight: bold;
	}

	.shout {
		padding: 0.5rem;
		border-bottom: 2px solid var(--primary);
	}

	.shouter {
		font-weight: bold;
		color: var(--primary);
	}

	.shout-body {
		font-weight: normal;
		color: var(--text);
	}

	.date {
		font-size: 1rem;
		font-weight: normal;
		float: right;
	}

	.button-row {
		display: flex;
		justify-content: center;
	}

	.button-row button {
		width: 50%;
		color: var(--text);
		background-color: var(--primary);
		border: none;
		padding: 1rem;
		border-radius: var(--border-radius);
		cursor: pointer;
		font-size: 1.2rem;
		font-weight: 500;
	}

	.button-row button:hover {
		color: var(--dark-text);
		background-color: var(--primary-hover);
	}

	.none {
		padding: 4px;
	}
</style>
