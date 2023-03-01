<script>
	export let links;
</script>

<nav class={`${$$restProps.class || ''} desktop-nav`}>
	<div class="home-link">
		<div>
			<a href="/">brian_philip</a>
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

	nav {
		display: flex;
		justify-content: space-between;
		border-bottom: 4px solid var(--primary);
		width: 100%;
		padding: 1rem;
	}

	.home-link {
		display: flex;
		margin-top: 0.5rem;
		align-items: center;
	}

	.home-link a {
		font-size: 2rem;
		text-decoration: none;
		font-weight: bold;
		text-align: center;
		font-family: 'SpecialElite';
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
		font-weight: normal;
		padding: 2rem;
		border-radius: 8px;
		background-color: var(--primary);
		text-decoration: none;
		color: var(--white);
		cursor: pointer;
	}

	.action-button:hover {
		background-color: var(--primary-hover);
	}
</style>
