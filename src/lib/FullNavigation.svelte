<script>
	export let links;
</script>

<nav class={`${$$restProps.class || ''} desktop-nav`}>
	<div class="home-link">
		<div>
			<a href="/">Brian Philip</a>
		</div>
	</div>
	<div class="nav-right">
		{#each links as link}
			<a
				class={link.action ? 'action-button' : ''}
				href={link.href}
				target={link.external ? '_blank' : ''}
				rel={link.external ? 'noopener noreferrer' : ''}>{link.text}</a
			>
		{/each}
	</div>
</nav>

<style>
	@media screen and (max-width: 720px) {
		.desktop-nav {
			display: none;
		}
	}

	.home-link {
		display: flex;
		flex-grow: 1;
		align-items: center;
	}

	.home-link a {
		font-size: 2rem;
		display: block;
		text-decoration: none;
		font-weight: bold;
		margin: 1rem;
		text-align: center;
		font-family: 'Shojumaru';
	}

	.nav-right {
		display: flex;
		flex-grow: 1;
		justify-content: right;
		align-items: center;
	}

	.nav-right a {
		font-size: 1.25rem;
		font-weight: bold;
		display: block;
		text-align: center;
		padding: 1.1rem;
		line-height: 0;
	}

	.nav-right .action-button {
		padding: 2rem;
		border-radius: 8px;
		background-color: var(--primary);
		text-decoration: none;
		color: var(--background);
		cursor: pointer;
	}

	.action-button:hover {
		background-color: var(--white);
	}
</style>
