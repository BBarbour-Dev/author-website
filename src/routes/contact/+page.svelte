<script>
	import { enhance } from '$app/forms';
	import ModalContactSuccess from '../../lib/modal/ModalContactSuccess.svelte';

	let error = '';
	let isLoading = false;
	let successModal = false;

	async function handleForm(_form) {
		return async ({ result, update }) => {
			isLoading = true;
			if (result.type !== 'error') {
				isLoading = false;
				successModal = true;
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

	function closeContactModal() {
		successModal = false;
	}
</script>

<svelte:head>
	<title>Brian Philip &middot; Contact &middot; Progression Fantasy and Sci-Fi Author</title>
</svelte:head>
<h1>Contact</h1>
{#if error}
	<p class="error">{error}</p>
{/if}
<form method="POST" use:enhance={handleForm}>
	<div class="form-row">
		<input type="text" id="name" name="name" maxlength="30" placeholder="Display Name*" required />
	</div>
	<div class="form-row">
		<input type="email" id="email" name="email" placeholder="Email* (So I can reply.)" required />
	</div>
	<div class="form-row">
		<textarea id="body" required name="body" rows="4" placeholder="Your message for me..." />
	</div>
	<div class="button-row"><button type="submit">Submit</button></div>
</form>

{#if successModal}
	<ModalContactSuccess on:close-modal-contact-success={closeContactModal} />
{/if}

<style>
	h1 {
		color: var(--primary);
		padding-bottom: 1rem;
		margin: 3rem 0;
		font-family: 'SpecialElite';
		line-height: 3rem;
	}

	label {
		display: block;
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

	.form-row input:focus {
		outline: 4px solid var(--highlight);
		transition: outline 0.2s;
	}

	.form-row input::placeholder {
		font-family: 'Crimson';
		color: var(--background);
		opacity: 0.5;
	}

	.form-row input:hover:not(:focus-visible) {
		outline: 2px solid var(--highlight);
		transition: outline 0.2s;
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
		height: 150px;
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

	.button-row {
		display: flex;
		justify-content: flex-start;
	}

	.button-row button {
		border-radius: var(--border-radius);
		border: none;
		padding: 1rem;
		font-size: 1.2rem;
		background-color: var(--primary);
		color: var(--text);
		font-weight: 500;
	}

	.button-row button:hover {
		padding: 1.25rem;
		color: var(--dark-text);
		background-color: var(--primary-hover);
		transition: padding 0.2s;
	}
</style>
