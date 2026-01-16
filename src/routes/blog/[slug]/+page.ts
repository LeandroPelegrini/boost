import { error } from '@sveltejs/kit';
import { getPost } from '$lib/data/posts';

export async function load({ params }) {
	const post = await getPost(params.slug);

	if (!post) {
		error(404, 'Post not found');
	}

	return {
		post
	};
}
