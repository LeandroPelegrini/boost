<script lang="ts">
	import { MapPinIcon } from "@lucide/svelte";
</script>

<section id="localizacao" class="py-20 bg-background">
	<div class="container mx-auto px-4">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<!-- Content -->
			<div class="space-y-6">
				<div class="flex items-start gap-4">
					<div class="size-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
						<MapPinIcon class="size-8 text-primary" />
					</div>
					<div>
						<h2 class="text-4xl md:text-5xl font-bold mb-4">
							ONDE
							<br />
							ENCONTRAR
						</h2>
						<p class="text-muted-foreground leading-relaxed">Encontre os produtos Boost nas melhores lojas, auto centers e distribuidores do Brasil.</p>
					</div>
				</div>
			</div>

			<!-- Map Placeholder -->
			<div class="relative aspect-video md:aspect-square rounded-lg overflow-hidden shadow-lg-2xl">
				<!-- NECESSÁRIO TROCAR IMAGEM PARA O MAPA -->
				<img src="imgs/boost-logo.svg" alt="Mapa de localização" class="w-full h-full object-cover" />
				<div class="absolute inset-0 flex items-center justify-center bg-black/20">
					<div class="text-center text-white">
						<MapPinIcon class="size-16 mx-auto mb-2" />
						<p class="text-lg font-semibold">Belo Horizonte, MG</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
