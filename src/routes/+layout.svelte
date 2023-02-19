<script>
	import Navbar from '../lib/Navbar.svelte';
	import '../styles/global.css';
	import Footer from '../lib/Footer.svelte';

	export let data;
	let { hideNewsletterSignUp } = data;
</script>

<main>
	<Navbar />
	<div class="content-wrapper">
		<slot />
	</div>
	<Footer bind:hideNewsletterSignUp />
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
