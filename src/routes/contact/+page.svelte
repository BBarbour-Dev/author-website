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
		outline: none;
		font-size: 1rem;
		border: 2px solid var(--white);
		background-color: var(--primary) !important;
		color: var(--white);
	}

	.form-row textarea {
		font-family: 'Crimson';
		width: 100%;
		padding: 10px;
		border-radius: 8px;
		outline: none;
		font-size: 1rem;
		border: 2px solid var(--white);
		background-color: var(--primary) !important;
		color: var(--white);
	}
	f .form-row textarea:focus {
		border: 4px solid var(--highlight);
	}

	.form-row input:focus {
		border: 4px solid var(--highlight);
	}

	.button-row {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.button-row button {
		border-radius: 8px;
		border: none;
		width: 50%;
		padding: 1rem;
		font-size: 1rem;
		background-color: var(--primary);
		color: var(--white);
	}

	.button-row button:hover {
		background-color: var(--primary-hover);
	}
</style>
