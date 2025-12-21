<script lang="ts">
	import { IconBrandInstagram } from "@tabler/icons-svelte";
</script>

<footer class="bg-background border-t border-border py-8">
	<div class="container mx-auto px-4">
		<div class="flex flex-col md:flex-row items-center justify-between gap-4">
			<!-- Logo -->
			<div class="text-2xl font-bold text-primary italic">Boost</div>

			<!-- Copyright -->
			<p class="text-sm text-muted-foreground">
				© {new Date().getFullYear()} Boost. Todos os direitos reservados.
			</p>

			<!-- Social -->
			<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="size-10 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors">
				<IconBrandInstagram class="size-5 text-primary" />
			</a>
		</div>
	</div>
</footer>
