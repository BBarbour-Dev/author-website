<script>
	import { createEventDispatcher } from 'svelte';
	import { enhance } from '$app/forms';
	import { asyncTimeout } from '../../helpers/asyncTimeout';
	import { hideNewsletterSignUp } from '../../store';
	import ModalWrapper from './ModalWrapper.svelte';

	export let shouts;
	const dispatch = createEventDispatcher();

	let showNewsletterSignUp = false;
	hideNewsletterSignUp.subscribe((value) => {
		showNewsletterSignUp = !value;
	});

	let error = '';

	async function handleForm(form) {
		return async ({ result }) => {
			if (result.type !== 'error') {
				shouts = result.data.shouts;
				hideNewsletterSignUp.update(() => true);
				dispatch('close-modal-shout');
			} else {
				error =
					result.status === 500 ? 'Internal server error. Please try again.' : result.error.message;
				await asyncTimeout(5000);
				error = '';
			}
		};
	}
</script>

<ModalWrapper eventName="close-modal-shout" on:close-modal-shout>
	<p class="modal-body">Leave a shout!</p>
	{#if error}
		<p class="error">{error}</p>
	{/if}
	<form method="POST" action="?/shout" use:enhance={handleForm}>
		<div class="form-row">
			<label for="name">Name/Username*</label>
			<input type="text" id="name" name="name" maxlength="30" required />
		</div>
		<div class="form-row">
			<label for="email">Email*</label>
			<input type="email" id="email" name="email" required />
		</div>
		<div class="form-row">
			<label for="body">Message* (Max 200 characters)</label>
			<input type="text" id="body" name="body" maxlength="200" required />
		</div>
		{#if showNewsletterSignUp}
			<div class="form-row-check">
				<label for="subscribe" class="subscribe">Subscribe to the newsletter?</label><input
					class="newsletter-check"
					type="checkbox"
					name="subscribe"
					id="subscribe"
					value="subscribe"
					checked
				/>
			</div>
		{/if}
		<div class="button-row"><button type="submit">Submit</button></div>
	</form>
</ModalWrapper>

<style>
	.modal-body {
		text-align: center;
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	label {
		display: block;
	}

	.form-row {
		width: 100%;
		margin-bottom: 1rem;
	}

	.form-row-check {
		width: 100%;
		margin-bottom: 1rem;
	}

	.form-row label {
		margin-bottom: 0.5rem;
		font-weight: bold;
	}

	.form-row input {
		width: 100%;
		padding: 1rem;
		border-radius: var(--border-radius);
		font-size: 1rem;
		border: none;
		outline: none;
		background-color: var(--text);
		color: var(--background);
	}

	.form-row input:focus {
		outline: 4px solid var(--dark);
	}

	.button-row {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.button-row button {
		border-radius: var(--border-radius);
		border: none;
		width: 50%;
		padding: 1rem;
		font-size: 1rem;
		background-color: var(--background);
		color: var(--text);
	}

	.button-row button:hover {
		background-color: var(--dark-text);
	}

	.subscribe {
		display: inline;
		margin-right: 0.5rem;
	}
</style>
