<script>
	import Hero from '$lib/components/hero.svelte';
	import About from '$lib/components/about.svelte';
	import Benefits from '$lib/components/benefits.svelte';
	import Products from '$lib/components/products.svelte';
	import Contact from '$lib/components/contact.svelte';
	import { IconBrandWhatsappFilled } from '@tabler/icons-svelte';
</script>

<Hero />
<About />
<Benefits />
<Products />
<Contact />

<a
	href="https://api.whatsapp.com/send?phone=5531998804464"
	target="_blank"
	rel="noopener noreferrer"
>
	<IconBrandWhatsappFilled
		class="bottom-10 right-10 w-12 h-12 text-green-400 fixed z-10 hover:text-green-600"
	/>
</a>
