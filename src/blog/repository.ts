import mdxPrism from 'mdx-prism';
import { getResource, getResources } from 'lib/local-markdown';
import { Post, PostMetadata, PostsCardsData, SerializedPost } from './types';
import { serialize } from 'next-mdx-remote/serialize';

export async function getPost(slug: string): Promise<SerializedPost> {
	const post = getResource<Post>({ slug, dir: 'content/posts' });
	const source = await serialize(post?.content, {
		mdxOptions: {
			remarkPlugins: [require('remark-code-titles')],
			rehypePlugins: [mdxPrism],
		},
	});
	return { ...post, content: source };
}

type StaticPaths = {
	params: { slug: string };
	locale?: string;
}[];
export function getPostsStaticPaths(): StaticPaths {
	const { data: posts } = getResources<PostMetadata>('./public/indexes/posts.json', {});
	const paths = posts.map((post) => ({
		params: { slug: post.slug },
		// , locale: 'en'
	}));
	return paths;
}
export function getPostsCards({ limit, pageNumber }: { limit: number; pageNumber?: string | string[] }): PostsCardsData {
	const { pages, hasPreviousPage, hasNextPage, data } = getResources<PostMetadata>('./public/indexes/posts.json', {
		pageNumber: parseInt(pageNumber as string, 10),
		limit,
	});

	return {
		pages,
		hasPreviousPage,
		hasNextPage,
		posts: data,
	};
}

export function getSuggestions(slug: string, limit: number): PostMetadata[] {
	const { data } = getResources<PostMetadata>('./public/indexes/posts.json', {
		limit,
		except: slug,
	});

	return data;
}
