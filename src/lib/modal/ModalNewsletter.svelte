<script>
	import ModalWrapper from '../elements/ModalWrapper.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function closeModal() {
		dispatch('close-modal-newsletter');
	}
</script>

<ModalWrapper eventName="close-modal-newsletter" on:close-modal-newsletter>
	<h3>Thank you for joining the newsletter!</h3>
	<button on:click={closeModal}>Close</button>
</ModalWrapper>

<style>
</style>
