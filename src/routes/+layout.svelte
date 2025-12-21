<script lang="ts">
	import "../app.css";
	import { setApp } from "$lib/hooks/app.svelte.js";
	import Header from "$lib/components/header.svelte";
	import Hero from "$lib/components/hero.svelte";
	import About from "$lib/components/about.svelte";
	import Benefits from "$lib/components/benefits.svelte";
	import Products from "$lib/components/products.svelte";
	import Location from "$lib/components/location.svelte";
	import Contact from "$lib/components/contact.svelte";
	import Footer from "$lib/components/footer.svelte";
	import favicon from "$lib/assets/favicon.ico";
	import favicon16 from "$lib/assets/favicon-16x16.png";
	import favicon32 from "$lib/assets/favicon-32x32.png";
	import faviconapple from "$lib/assets/apple-touch-icon.png";
	import faviconand192 from "$lib/assets/android-chrome-192x192.png";
	import faviconand512 from "$lib/assets/android-chrome-512x512.png";

	
	// Set app with dark mode enabled by default
	const app = setApp({ isDarkMode: true });
</script>

<svelte:head>
	<link rel="icon" type="image/x-icon" href={favicon16} />
	<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
	<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
	<link rel="apple-touch-icon" sizes="180x180" href={faviconapple} />
	<link rel="icon" type="image/png" sizes="192x192" href={faviconand192} />
	<link rel="icon" type="image/png" sizes="512x512" href={faviconand512} />
	<link rel="icon" href={favicon} />
</svelte:head>

<div class={["min-h-screen bg-background text-foreground", app.isDarkMode && "dark"]}>
	<Header />
	<main>
		<Hero />
		<About />
		<Benefits />
		<Products />
		<!--
			<Location />
		-->
		<Contact />
		<slot />
	</main>
	<Footer />
</div>