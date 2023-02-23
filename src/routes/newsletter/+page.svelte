<script>
	export let data;
	const { hideNewsletterSignUp, unsubscribe, unsubscribePromotions } = data;
</script>

<svelte:head>
	<title>Brian Philip &middot; Newsletter &middot; Progression Fantasy and Sci-Fi Author</title>
</svelte:head>
<div>
	<h1>Newsletter Signup</h1>
	{#if hideNewsletterSignUp}
		<h3>You've already signed up for our newsletter! Thanks again.</h3>
	{/if}
	{#if unsubscribe}
		<h3>You have unsubscribed to the newsletter. Hope to see you again in the future!</h3>
	{/if}
	{#if unsubscribePromotions}
		<h3>You have unsubscribed from promotions. Hope to see you again in the future!</h3>
	{/if}
	<a href="/"><h2>Return Home</h2></a>
</div>

<style>
	div {
		margin-top: 5rem;
		width: 100%;
		text-align: center;
		font-size: 1.25rem;
	}

	div h1,
	h3 {
		margin-bottom: 5rem;
	}
</style>
