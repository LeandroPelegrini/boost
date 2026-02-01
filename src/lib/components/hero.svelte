<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ChevronDownIcon } from '@lucide/svelte';

	const scrollToProducts = () => {
		const element = document.querySelector('#produtos');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
</script>

<section class="relative h-screen flex items-center justify-center overflow-hidden">
	<!-- Background Image with Overlay -->
	<div class="absolute inset-0 z-0">
		<img
			src="https://images.unsplash.com/photo-1593142927924-087946ba0a16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="Motor automotivo"
			class="w-full h-full object-cover"
		/>
		<div class="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-background"></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 container mx-auto px-4 text-center">
		<img src="/imgs/boost-logo.svg" alt="Logo Boost" class="mx-auto pb-8 h-auto max-h-40" fetchpriority="high">
		<h1 class="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">A ESCOLHA SEGURA</h1>
		<p class="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
			Soluções automotivas práticas e eficientes.
		</p>
		<Button size="lg" class="text-lg px-8" onclick={scrollToProducts}
			>Conheça nossos produtos</Button
		>
	</div>

	<!-- Scroll Indicator -->
	<button
		onclick={scrollToProducts}
		class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
	>
		<ChevronDownIcon class="size-8 text-white" />
	</button>
</section>
