import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type PostMetadata = {
	slug: string;
	title: string;
	cover: string;
	description: string;
	date: string;
	tags: { name: string; icon: string }[];
	publishedAt: string;
	updatedAt: string;
};

export type Post = PostMetadata & {
	content: string;
};
export type SerializedPost = PostMetadata & {
	content: MDXRemoteSerializeResult;
};

export type PostsCardsData = {
	pages: number;
	hasPreviousPage: boolean;
	hasNextPage: boolean;
	posts: PostMetadata[];
};
