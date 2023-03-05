<script>
	import { enhance } from '$app/forms';
	import ModalNewsletter from './modal/ModalNewsletter.svelte';
	import { asyncTimeout } from '../helpers/asyncTimeout';
	import { hideNewsletterSignUp } from '../store';

	let showForm = true;
	hideNewsletterSignUp.subscribe((value) => {
		showForm = !value;
	});
	let newsletterModal = false;
	let error = '';

	async function handleForm(_form) {
		return async ({ result }) => {
			if (result.type !== 'error') {
				newsletterModal = true;
			} else {
				error = 'Server error, please try again.';
				await asyncTimeout(5000);
				error = '';
			}
		};
	}

	function closeNewsletterModal() {
		newsletterModal = false;
		hideNewsletterSignUp.update((value) => {
			return (value = true);
		});
	}
</script>

{#if showForm}
	<div id="newsletter">
		<p class="footer-text">Join my Newsletter today to get updates!</p>
		{#if error}
			<p class="error">{error}</p>
		{/if}
		<form method="POST" action="/newsletter?/subscribe" use:enhance={handleForm}>
			<div class="form-row">
				<label for="name">Display Name</label>
				<input type="text" id="name" name="name" required />
			</div>
			<div class="form-row">
				<label for="email">Email*</label>
				<input type="email" id="email" name="email" required />
			</div>
			<div class="button-row">
				<button type="submit">Submit</button>
			</div>
		</form>
	</div>
{/if}
{#if newsletterModal}
	<ModalNewsletter on:close-modal-newsletter={closeNewsletterModal} />
{/if}

<style>
	form {
		margin-bottom: 3rem;
		width: 100%;
	}

	label {
		display: block;
	}

	.footer-text {
		font-size: 1.5rem;
		margin: 2rem 0;
		text-align: center;
	}

	.form-row {
		width: 100%;
		margin-bottom: 1rem;
	}

	.form-row label {
		margin-bottom: 0.5rem;
		font-weight: bold;
	}

	.form-row input {
		width: 100%;
		padding: 10px;
		border-radius: var(--border-radius);
		font-size: 1rem;
		border: none;
		outline: none;
		background-color: var(--text);
		color: var(--background);
	}

	.form-row input:focus-visible {
		outline: 4px solid var(--highlight);
	}

	.button-row button {
		color: var(--text);
		background-color: var(--primary);
		border: none;
		padding: 1rem;
		width: 100%;
		border-radius: var(--border-radius);
		cursor: pointer;
		font-size: 1.2rem;
		font-weight: 500;
	}

	.button-row button:hover {
		color: var(--dark-text);
		background-color: var(--primary-hover);
	}
</style>
