<script>
	import { hideNewsletterSignUp } from '../../store';

	export let data;
	const { unsubscribe, unsubscribePromotions } = data;

	let signedUp = false;
	hideNewsletterSignUp.subscribe((value) => {
		signedUp = value;
	});
</script>

<svelte:head>
	<title>Brian Philip &middot; Newsletter &middot; Progression Fantasy and Sci-Fi Author</title>
</svelte:head>
<div>
	{#if unsubscribe}
		<p>You are unsubscribed to the newsletter. Hope to see you again in the future.</p>
	{:else if unsubscribePromotions}
		<h3>You are unsubscribed from promotions. Hope to see you again in the future.</h3>
	{:else if signedUp}
		<p>You are signed up for our newsletter! Thanks again.</p>
	{:else}
		<p>Sign up below.</p>
	{/if}
</div>

<style>
	p {
		text-align: center;
	}
</style>
