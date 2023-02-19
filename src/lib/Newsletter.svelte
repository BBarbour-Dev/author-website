<script>
	import { enhance } from '$app/forms';
	import ModalNewsletter from './modal/ModalNewsletter.svelte';
	import { browser } from '$app/environment';

	export let hideNewsletterSignUp;
	let newsletterModal = false;

	async function handleForm({ formReturn, data, action, cancel }) {
		return async ({ result, update }) => {
			if (result.data.hideNewsletterSignUp) {
				newsletterModal = true;

				if (browser) {
					window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
				}
			}
		};
	}

	function closeNewsletterModal() {
		newsletterModal = false;
		hideNewsletterSignUp = true;
	}
</script>

{#if !hideNewsletterSignUp}
	<div id="newsletter">
		<p class="footer-text">Join my Newsletter today to get updates!</p>
		<form method="POST" action="?/newsletter" use:enhance={handleForm}>
			<div class="form-row">
				<label for="name">Name/Username*</label>
				<input type="text" id="name" name="name" required />
			</div>
			<div class="form-row">
				<label for="email">Email*</label>
				<input type="email" id="email" name="email" required />
			</div>
			<div class="form-button">
				<button type="submit">Submit</button>
			</div>
		</form>
	</div>
{/if}
{#if newsletterModal}
	<ModalNewsletter bind:hideNewsletterSignUp on:close-modal-newsletter={closeNewsletterModal} />
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

	.form-button button {
		color: var(--background);
		background-color: var(--primary);
		border: none;
		padding: 1rem;
		font-size: 1.25rem;
		font-weight: bold;
		width: 100%;
		border-radius: 8px;
		cursor: pointer;
	}

	.form-button button:hover {
		background-color: var(--white);
	}
</style>
