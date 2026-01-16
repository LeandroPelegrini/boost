<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { MailIcon } from '@lucide/svelte';
	import { IconBrandWhatsapp, IconBrandInstagram } from '@tabler/icons-svelte';
</script>

<section id="contato" class="py-20 bg-card relative overflow-hidden">
	<!-- Background Image with Overlay -->
	<div class="absolute inset-0 z-0">
		<!--
		<img src="imgs/boost-logo.svg" alt="Background" class="w-full h-full object-cover opacity-10" />
		-->
	</div>

	<div class="container mx-auto px-4 relative z-10">
		<div class="text-center mb-12">
			<h2 class="text-4xl md:text-5xl font-bold mb-4">CONTATO</h2>
			<p class="text-muted-foreground max-w-2xl mx-auto">
				Tem dúvida sobre algum produto, quer ser parceiro ou precisa de suporte? <br /> Fale com a gente.
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
			<Card class="text-center hover:shadow-lg-lg transition-shadow-lg">
				<CardHeader>
					<div
						class="size-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"
					>
						<svelte:component this={IconBrandWhatsapp} class="size-6 text-primary" />
					</div>
					<CardTitle class="text-sm font-semibold text-muted-foreground">WHATSAPP</CardTitle>
				</CardHeader>
				<CardContent class="text-foreground font-medium">
					<a
						href="https://api.whatsapp.com/send?phone=5531998804464"
						target="_blank"
						rel="noopener noreferrer">(31) 99880-4464</a
					>
				</CardContent>
			</Card>

			<Card class="text-center hover:shadow-lg-lg transition-shadow-lg">
				<CardHeader>
					<div
						class="size-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"
					>
						<svelte:component this={MailIcon} class="size-6 text-primary" />
					</div>
					<CardTitle class="text-sm font-semibold text-muted-foreground">EMAIL</CardTitle>
				</CardHeader>
				<CardContent class="text-foreground font-medium">
					<a href="mailto:vendasml@drltrade.com.br">vendasml@drltrade.com.br</a>
				</CardContent>
			</Card>

			<Card class="text-center hover:shadow-lg-lg transition-shadow-lg">
				<CardHeader>
					<div
						class="size-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"
					>
						<svelte:component this={IconBrandInstagram} class="size-6 text-primary" />
					</div>
					<CardTitle class="text-sm font-semibold text-muted-foreground">INSTAGRAM</CardTitle>
				</CardHeader>
				<CardContent class="text-foreground font-medium">
					<a href="https://www.instagram.com/boost_brasil" target="_blank" rel="noopener noreferrer"
						>@boost_brasil</a
					>
				</CardContent>
			</Card>
		</div>
	</div>
</section>
