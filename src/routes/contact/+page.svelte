<script>
	import { enhance } from '$app/forms';
	import ModalContactSuccess from '../../lib/modal/ModalContactSuccess.svelte';

	let error = '';
	let successModal = false;

	async function handleForm(form) {
		return async ({ result, update }) => {
			if (result.type !== 'error') {
				successModal = true;
				update();
			} else {
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
		<label for="name">Name/Username*</label>
		<input type="text" id="name" name="name" maxlength="30" required />
	</div>
	<div class="form-row">
		<label for="email">Email*</label>
		<input type="email" id="email" name="email" required />
	</div>
	<div class="form-row">
		<label for="body">Message*</label>
		<textarea id="body" name="body" required rows="4" />
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

	form {
		width: 100%;
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
		border-radius: 8px;
		font-size: 1rem;
		border: none;
		outline: none;
		background-color: var(--text);
		color: var(--background);
	}

	.form-row textarea {
		font-family: 'Crimson';
		width: 100%;
		padding: 10px;
		border-radius: 8px;
		font-size: 1rem;
		border: none;
		outline: none;
		background-color: var(--text);
		color: var(--background);
	}

	.form-row textarea:focus {
		outline: 4px solid var(--highlight);
	}

	.form-row input:focus {
		outline: 4px solid var(--highlight);
	}

	.button-row {
		display: flex;
		justify-content: center;
	}

	.button-row button {
		border-radius: 8px;
		border: none;
		width: 50%;
		padding: 1rem;
		font-size: 1.2rem;
		background-color: var(--primary);
		color: var(--text);
		font-weight: 500;
	}

	.button-row button:hover {
		color: var(--dark-text);
		background-color: var(--primary-hover);
	}
</style>
