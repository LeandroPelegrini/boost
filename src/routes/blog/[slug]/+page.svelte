<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { ArrowLeft } from "@lucide/svelte";

	let { data } = $props();
</script>

<article class="container mx-auto px-4 py-24 max-w-4xl">
    <Button href="/blog" variant="ghost" class="mb-8 pl-0 hover:pl-2 transition-all gap-2 text-muted-foreground">
        <ArrowLeft size={20} />
        Voltar para o blog
    </Button>
    
    <header class="mb-10 text-center">
        <h1 class="text-3xl md:text-5xl font-bold mb-4 text-primary leading-tight">{data.post.title}</h1>
        <div class="text-muted-foreground font-medium">
            {new Date(data.post.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
    </header>

    {#if data.post.image}
        <div class="w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg mb-12 bg-muted border">
            <img src={data.post.image} alt={data.post.title} class="w-full h-full object-cover" />
        </div>
    {/if}

    <div class="max-w-none text-lg leading-relaxed text-foreground/90 
        [&_p]:mb-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_li]:mb-2 [&_li]:pl-2">
        <data.post.content />
    </div>

    <hr class="my-8">

    <Button href="/blog" variant="ghost" class="mb-8 pl-0 hover:pl-2 transition-all gap-2 text-muted-foreground">
        <ArrowLeft size={20} />
        Voltar para o blog
    </Button>
</article>
