<script>
	import { enhance } from '$app/forms';
	import ModalNewsletter from './modal/ModalNewsletter.svelte';
	import { browser } from '$app/environment';
	import { asyncTimeout } from '../utilities/asyncTimeout';
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
			value = !value;
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
				<label for="name">Name/Username*</label>
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
		border-radius: 8px;
		outline: none;
		font-size: 1rem;
		border: 1px solid var(--white);
	}

	.form-row input:focus {
		border: 3px solid var(--off-white);
	}

	.button-row button {
		color: var(--white);
		background-color: var(--primary);
		border: none;
		padding: 1rem;
		font-size: 1.25rem;
		width: 100%;
		border-radius: 8px;
		cursor: pointer;
	}

	.button-row button:hover {
		background-color: var(--primary-hover);
	}
</style>
