<script>
	import ModalWrapper from './ModalWrapper.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function closeModal() {
		dispatch('close-modal-contact-success');
	}
</script>

<ModalWrapper eventName="close-modal-contact-success" on:close-modal-contact-success>
	<p class="modal-body">Thanks for contacting me! I will reply by email. 📧</p>
	<div class="button-row"><button on:click={closeModal}>Close</button></div>
</ModalWrapper>

<style>
	.modal-body {
		text-align: center;
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.button-row {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.button-row button {
		border-radius: var(--border-radius);
		width: 50%;
		padding: 1rem;
		font-size: 1rem;
		background-color: var(--background);
		color: var(--text);
	}

	.button-row button:hover {
		background-color: var(--dark-text);
	}
</style>
