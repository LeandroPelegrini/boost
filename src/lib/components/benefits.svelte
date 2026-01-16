<script lang="ts">
	import { CheckCircle2Icon } from '@lucide/svelte';

	const benefits = [
		{
			title: 'MAIS POTÊNCIA',
			description: 'Fórmulas desenvolvidas para maximizar o desempenho.'
		},
		{
			title: 'MENOS CONSUMO',
			description: 'Otimização que resulta em economia.'
		},
		{
			title: 'FÁCIL APLICAÇÃO',
			description: 'Produtos práticos para uso profissional.'
		}
	];
</script>

<section class="py-20 bg-card relative overflow-hidden">
	<!-- Background Image with Overlay -->
	<div class="absolute inset-0 z-0">
		<img
			src="https://images.unsplash.com/photo-1560869365-ad497769c28c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="Motor"
			class="w-full h-full object-cover opacity-20"
		/>
	</div>

	<div class="container mx-auto px-4 relative z-10">
		<div class="mb-12">
			<h2 class="text-4xl md:text-5xl font-bold mb-4">
				NOSSOS
				<br />
				PRODUTOS
			</h2>
			<p class="text-muted-foreground max-w-2xl">
				A linha de produtos Boost foi feita para quem entende de desempenho.<br />Limpeza, proteção
				e performance. Cada fórmula foi desenvolvida para entregar resultados reais.
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8">
			{#each benefits as benefit}
				<div class="flex flex-col items-center text-center gap-4">
					<div class="size-16 rounded-full bg-primary/20 flex items-center justify-center">
						<CheckCircle2Icon class="size-8 text-primary" />
					</div>
					<h3 class="text-xl font-bold">{benefit.title}</h3>
					<p class="text-muted-foreground">{benefit.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
