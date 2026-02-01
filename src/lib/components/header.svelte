<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { MenuIcon, XIcon } from '@lucide/svelte';
	import { page } from '$app/stores';

	let mobileMenuOpen = $state(false);

	const navItems = [
		{ label: 'Sobre', href: '/#sobre' },
		{ label: 'Produtos', href: '/#produtos' },
		// { label: "Onde encontrar", href: "/#localizacao" },
		{ label: 'Contato', href: '/#contato' },
		{ label: 'Blog', href: '/blog' }
	];

	const handleNavigation = (e: MouseEvent, href: string) => {
		mobileMenuOpen = false;

		// If it's an anchor link and we are on the home page
		if (href.startsWith('/#') && $page.url.pathname === '/') {
			e.preventDefault();
			const id = href.replace('/', '');
			const element = document.querySelector(id);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
				// Update URL without jumping
				history.pushState(null, '', href);
			}
		}
	};
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
>
	<div class="container mx-auto px-4">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-2">
				<div class="text-2xl font-bold text-primary italic">
					<img src="/imgs/boost-logo.svg" alt="logo Boost" class="max-w-36" fetchpriority="high" />
				</div>
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden md:flex items-center gap-6">
				{#each navItems as item}
					<a
						href={item.href}
						onclick={(e) => handleNavigation(e, item.href)}
						class="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer font-medium"
					>
						{item.label}
					</a>
				{/each}
			</nav>

			<!-- Mobile Menu Button -->
			<Button
				size="icon"
				variant="ghost"
				class="md:hidden"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			>
				{#if mobileMenuOpen}
					<XIcon />
				{:else}
					<MenuIcon />
				{/if}
			</Button>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<nav class="md:hidden py-4 border-t border-border bg-background">
				{#each navItems as item}
					<a
						href={item.href}
						onclick={(e) => handleNavigation(e, item.href)}
						class="block w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0"
					>
						{item.label}
					</a>
				{/each}
			</nav>
		{/if}
	</div>
</header>
