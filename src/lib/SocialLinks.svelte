<script>
	const date = new Date();
	const year = date.getFullYear();
</script>

<p class="footer-text">Social Links</p>
<div class="social-links">
	<a href="https://amzn.to/3IBsvAO" target="_blank" rel="noopener noreferrer">amazon</a>
	<a href="https://www.royalroad.com/profile/333730" target="_blank" rel="noopener noreferrer"
		>royal road</a
	>
	<a href="https://twitter.com/BBarbourDev" target="_blank" rel="noopener noreferrer">twitter</a>
	<a href="https://bbarbour.dev">my dev site</a>
</div>
<p class="footer-text small">
	©{year} Brian Philip Author. Site built by me. My dev site is at
	<a href="http://bbarbour.dev">bbarbour.dev</a>.
</p>

<style>
	.footer-text {
		margin-bottom: 1rem;
		text-align: center;
	}

	.small {
		font-size: 12px;
	}

	.social-links {
		margin-bottom: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.social-links a {
		text-align: center;
		margin: 0.5rem;
	}

	@media screen and (max-width: 720px) {
		.social-links {
			flex-direction: column;
			padding: 0;
		}

		.social-links a {
			margin-bottom: 0.5rem;
		}
	}
</style>
