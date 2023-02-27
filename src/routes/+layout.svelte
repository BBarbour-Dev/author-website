<script>
	import Navbar from '../lib/Navbar.svelte';
	import Footer from '../lib/Footer.svelte';
	import { hideNewsletterSignUp } from '../store';
	import '../styles/global.css';

	export let data;

	hideNewsletterSignUp.update((value) => {
		return (value = data.hideNewsletterSignUp);
	});
</script>

<main>
	<Navbar />
	<div class="content-wrapper">
		<slot />
	</div>
	<Footer />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.content-wrapper {
		padding: 1rem;
	}

	@media (min-width: 900px) {
		.content-wrapper {
			width: 75%;
		}
	}

	@media screen and (max-width: 720px) {
		.content-wrapper {
			overflow-x: hidden;
		}
	}
</style>
