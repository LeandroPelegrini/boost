<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	let { data } = $props();
</script>

<div class="container mx-auto px-4 py-24">
	<h1 class="text-4xl font-bold mb-12 text-center text-primary italic">Blog Boost</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each data.posts as post}
			<Card
				class="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow duration-300"
			>
				{#if post.image}
					<div class="w-full h-52 overflow-hidden bg-muted">
						<img
							src={post.image}
							alt={post.title}
							class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
						/>
					</div>
				{/if}
				<CardHeader>
					<div class="text-sm text-muted-foreground mb-2">
						{new Date(post.date).toLocaleDateString('pt-BR', {
							day: 'numeric',
							month: 'long',
							year: 'numeric'
						})}
					</div>
					<CardTitle class="text-xl leading-tight hover:text-primary transition-colors">
						<a href="/blog/{post.slug}">{post.title}</a>
					</CardTitle>
				</CardHeader>
				<CardContent class="flex-grow">
					<p class="text-muted-foreground line-clamp-3">
						{post.excerpt}
					</p>
				</CardContent>
				<CardFooter>
					<Button href="/blog/{post.slug}" variant="outline" class="w-full group">
						Ler mais
						<span class="group-hover:translate-x-1 transition-transform ml-1">→</span>
					</Button>
				</CardFooter>
			</Card>
		{/each}
	</div>
</div>
