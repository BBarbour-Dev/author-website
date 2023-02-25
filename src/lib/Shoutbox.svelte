<script>
	import { formatRelative } from 'date-fns';
	export let shouts;
</script>

<div class="shoutbox">
	<p class="shout-title">Shoutbox 📢</p>
	<div class="shouts">
		{#if shouts}
			{#each shouts as shout}
				<div class="shout">
					<p class="shouter">
						@{shout.name} &middot;
						<span class="shout-body">{shout.body}</span>
						<span class="date">{formatRelative(new Date(shout._createdAt), new Date())}</span>
					</p>
				</div>
			{/each}
		{:else}
			<p>No shouts. Be the first!</p>
		{/if}
	</div>
	<div class="button-row">
		<button>Shout</button>
	</div>
</div>

<style>
	.shoutbox {
		height: 250px;
		border: 4px solid var(--primary);
		border-radius: 8px;
		padding: 0.75rem;
		flex: 3 1 300px;
	}

	.shouts {
		height: 150px;
		overflow-y: scroll;
		border: 2px solid var(--primary);
		border-radius: 8px;
		margin-bottom: 8px;
	}

	.shout-title {
		font-weight: bold;
	}

	.shout {
		padding: 4px;
		border-bottom: 2px solid var(--primary);
	}

	.shouter {
		font-weight: bold;
		font-size: 0.85rem;
		color: var(--primary);
	}

	.shout-body {
		font-weight: normal;
		color: var(--text);
		font-size: 0.85rem;
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
		color: var(--background);
		background-color: var(--primary);
		border-radius: 8px;
	}
</style>
