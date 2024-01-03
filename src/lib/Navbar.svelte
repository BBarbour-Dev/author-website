<script>
	import FullNavigation from './FullNavigation.svelte';
	import MobileNavigation from './MobileNavigation.svelte';
	import { hideNewsletterSignUp } from '../store';

	let showNewsletterButton = true;

	hideNewsletterSignUp.subscribe((value) => {
		showNewsletterButton = value;
	});

	let links = [
		{
			href: '/blog',
			text: 'Blog',
			external: false,
			action: false
		},
		{
			href: '/novels',
			text: 'Novels',
			external: false,
			action: false
		},
		{
			href: '#newsletter',
			text: 'Newsletter',
			external: false,
			action: true
		}
	];

	$: {
		if (showNewsletterButton) {
			links = links.filter((link) => {
				return link.href !== '#newsletter';
			});
		}
	}
</script>

<FullNavigation {links} class="nav" />
<MobileNavigation {links} />
