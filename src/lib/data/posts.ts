import type { Component } from 'svelte';

export type Post = {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	image?: string;
	content?: Component;
};

export async function getPosts(): Promise<Post[]> {
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	const posts = Object.entries(paths)
		.map(([path, file]: [string, any]) => {
			const slug = path.split('/').pop()?.replace('.md', '') ?? '';

			if (file && typeof file === 'object' && 'metadata' in file && slug) {
				const metadata = file.metadata as Omit<Post, 'slug' | 'content'>;
				return {
					slug,
					...metadata
				};
			}
			return undefined;
		})
		.filter((post): post is Post => !!post)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return posts;
}

export async function getPost(slug: string): Promise<Post | undefined> {
	try {
		const file = await import(`../../posts/${slug}.md`);
		if (file && typeof file === 'object' && 'metadata' in file) {
			return {
				slug,
				...file.metadata,
				content: file.default // O conteúdo renderizado do markdown
			};
		}
	} catch (e) {
		console.error(e);
		return undefined;
	}
	return undefined;
}
