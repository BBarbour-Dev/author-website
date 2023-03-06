<script>
	import { enhance } from '$app/forms';
	import { hideNewsletterSignUp } from '../store';
	import { asyncTimeout } from '../helpers/asyncTimeout';
	import Loader from '../lib/Loader.svelte';

	export let shouts;

	let showNewsletterSignUp = false;
	hideNewsletterSignUp.subscribe((value) => {
		showNewsletterSignUp = !value;
	});

	let fields = false;
	let error = '';
	let isLoading = false;

	async function handleForm(form) {
		isLoading = true;
		return async ({ result, update }) => {
			if (result.type !== 'error') {
				shouts = result.data.shouts;
				fields = false;
				isLoading = false;
				update();
			} else {
				isLoading = false;
				error =
					result.status === 500 ? 'Internal server error. Please try again.' : result.error.message;
				await asyncTimeout(5000);
				error = '';
			}
		};
	}

	function showFields() {
		fields = true;
	}
</script>

<form method="POST" action="?/shout" use:enhance={handleForm}>
	{#if error}
		<p class="error">{error}</p>
	{/if}
	<div class="form-row">
		<textarea
			id="body"
			name="body"
			required
			on:focusin={showFields}
			placeholder="Leave a shout"
			style={fields ? 'height: 150px' : ''}
		/>
	</div>
	{#if fields}
		<div class="form-row">
			<div class="container">
				<input
					type="text"
					id="name"
					name="name"
					maxlength="30"
					placeholder="Display Name*"
					required
				/>
			</div>
			<div class="container">
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email* (Not shown to public)"
					required
				/>
			</div>
		</div>
		<div class="button-row">
			<button type="submit">
				{#if isLoading}
					<Loader />
				{:else}
					Submit
				{/if}
			</button>
		</div>
	{/if}
</form>

<style>
	.form-row {
		width: 100%;
		margin-bottom: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.form-row textarea {
		font-family: 'Crimson';
		height: 75px;
		width: 100%;
		padding: 1rem;
		border-radius: var(--border-radius);
		font-size: 1rem;
		border: none;
		outline: none;
		background-color: var(--text);
		color: var(--background);
	}

	.form-row textarea:focus {
		outline: 4px solid var(--highlight);
		transition: outline 0.2s, height 0.3s;
	}

	.form-row textarea::placeholder {
		font-family: 'Crimson';
		color: var(--background);
		opacity: 0.5;
	}

	.form-row textarea:hover:not(:focus-visible) {
		outline: 2px solid var(--highlight);
		transition: outline 0.2s;
	}

	.container {
		flex: 1;
	}

	.container input {
		font-family: 'Crimson';
		width: 100%;
		padding: 10px;
		border-radius: var(--border-radius);
		font-size: 1rem;
		border: none;
		outline: none;
		background-color: var(--text);
		color: var(--background);
	}

	.container input:focus {
		outline: 4px solid var(--highlight);
		transition: outline 0.2s;
	}

	.container input::placeholder {
		font-family: 'Crimson';
		color: var(--background);
		opacity: 0.5;
	}

	.container input:hover:not(:focus-visible) {
		outline: 2px solid var(--highlight);
		transition: outline 0.2s;
	}

	.button-row {
		display: flex;
		justify-content: flex-start;
	}

	.button-row button {
		border-radius: var(--border-radius);
		border: none;
		padding: 0.5rem 1.25rem;
		font-size: 1rem;
		background-color: var(--primary);
		color: var(--text);
		font-weight: 500;
	}

	.button-row button:hover {
		padding: 0.75rem 1.5rem;
		color: var(--dark-text);
		background-color: var(--primary-hover);
		transition: padding 0.2s;
	}
</style>
