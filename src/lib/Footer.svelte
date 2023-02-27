<script>
	import Newsletter from './Newsletter.svelte';
	import SocialLinks from './SocialLinks.svelte';
</script>

<footer>
	<div class="container">
		<Newsletter />
		<SocialLinks />
	</div>
</footer>

<style>
	footer {
		margin-top: 5rem;
		border-top: 4px solid var(--primary);
		padding: 1rem;
		display: flex;
		width: 100%;
		justify-content: center;
	}
</style>
