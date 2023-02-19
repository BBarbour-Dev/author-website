<script>
	export let links;
	let drawerOpen = false;

	function toggleDrawer() {
		drawerOpen = !drawerOpen;
	}
</script>

<div class="hamburger" style={`${drawerOpen ? 'visibility: hidden;' : ''}`}>
	<button on:click={toggleDrawer}>&#9776;</button>
</div>

<nav
	class="mobile-nav"
	on:click={toggleDrawer}
	on:keydown={toggleDrawer}
	style={`${drawerOpen ? 'visibility: visible; width: 350px;' : ''}`}
>
	{#if drawerOpen}
		<div class="drawer">
			<button class="close">&times;</button>
			<div class="mobile-logo">
				<span>Brian Philip</span>
			</div>
			<div class="link"><a href="/">Home</a></div>
			{#each links as link}
				<div class="link">
					<a
						href={link.href}
						target={link.external ? '_blank' : ''}
						rel={link.external ? 'noopener noreferrer' : ''}>{link.text}</a
					>
				</div>
			{/each}
		</div>
	{/if}
</nav>

<style>
	.hamburger {
		width: 100%;
		display: none;
		z-index: 1;
		border-bottom: 0;
		box-shadow: none;
		position: fixed;
		bottom: 1%;
		left: 80%;
	}

	.hamburger button {
		height: 4rem;
		width: 4rem;
		background-color: var(--background);
		border: 6px solid var(--primary);
		font-size: 2.25rem;
		color: var(--primary);
		border-radius: 50%;
	}

	.drawer {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow: hidden;
		transition: 0.3s;
	}

	.mobile-logo {
		padding-bottom: 0.5rem;
	}

	.mobile-logo span {
		font-size: 1.5rem;
		text-align: center;
		color: var(--text);
		letter-spacing: 2px;
		display: block;
		text-decoration: none;
		font-weight: bold;
		font-family: 'UnicalAntiqua';
	}

	.link {
		margin-bottom: 0.5rem;
	}

	.link a {
		text-align: center;
		font-size: 1.25rem;
		color: var(--text);
		display: block;
	}

	.link a:hover {
		color: var(--background);
	}

	.close {
		position: absolute;
		bottom: 0;
		right: 25px;
		font-size: 2.25rem;
		margin-left: 50px;
		border: none;
		background-color: transparent;
		color: var(--text);
	}

	.close:hover {
		color: var(--background);
	}

	.mobile-nav {
		display: none;
		visibility: hidden;
		height: 350px;
		width: 0%;
		position: fixed;
		z-index: 1;
		bottom: 0;
		right: 0;
		background-color: var(--primary);
		border-radius: 12px 0 0 0;
		overflow-x: hidden;
		transition: 0.3s;
	}

	@media screen and (max-width: 720px) {
		.hamburger {
			display: block;
		}

		.mobile-nav {
			display: flex;
		}
	}
</style>
