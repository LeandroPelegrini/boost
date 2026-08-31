import type { Component } from 'svelte';

export type Post = {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	image?: string;
	content?: Component;
};

type PostModule = {
	metadata: Omit<Post, 'slug' | 'content'>;
	default: Component;
};

const modules = import.meta.glob('/src/posts/*.md', { eager: true }) as Record<string, PostModule>;

function slugFromPath(path: string): string {
	return path.split('/').pop()?.replace('.md', '') ?? '';
}

export async function getPosts(): Promise<Post[]> {
	const posts = Object.entries(modules)
		.map(([path, file]) => {
			const slug = slugFromPath(path);
			if (slug && file.metadata) {
				return {
					slug,
					...file.metadata
				};
			}
			return undefined;
		})
		.filter((post): post is Post => !!post)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return posts;
}

export async function getPost(slug: string): Promise<Post | undefined> {
	const path = Object.keys(modules).find((candidate) => slugFromPath(candidate) === slug);
	const file = path ? modules[path] : undefined;

	if (!file || !file.metadata) {
		return undefined;
	}

	return {
		slug,
		...file.metadata,
		content: file.default // O conteúdo renderizado do markdown
	};
}
