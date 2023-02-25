<script>
	import { enhance } from '$app/forms';
	import ModalWrapper from '../elements/ModalWrapper.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let shoutModal = false;
	let error = '';

	function closeModal() {
		dispatch('close-modal-shout');
	}

	async function handleForm(form) {
		return async ({ result }) => {
			if (result.type !== 'error') {
			} else {
				error = 'Server error, please try again.';
				setTimeout(() => {
					error = '';
				}, 5000);
			}
		};
	}
</script>

<ModalWrapper eventName="close-modal-shout" on:close-modal-shout>
	<form method="POST" action="/?shout" use:enhance={handleForm}>
		<div class="button-row"><button on:click={closeModal}>Submit</button></div>
	</form>
</ModalWrapper>

<style>
	.button-row {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.button-row button {
		border-radius: 8px;
		width: 50%;
		padding: 1rem;
		font-size: 1rem;
		background-color: var(--primary);
		color: var(--background);
	}
</style>
