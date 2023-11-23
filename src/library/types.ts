import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type LibraryItemMetadata = {
	slug: string;
	title: string;
	cover: string;
	description: string;
	date: string;
	tags: string[];
	publishedAt: string;
	updatedAt: string;
};

export type Post = LibraryItemMetadata & {
	content: string;
};
export type SerializedLibraryItem = LibraryItemMetadata & {
	content: MDXRemoteSerializeResult;
};

export type PostsCardsData = {
	pages: number;
	hasPreviousPage: boolean;
	hasNextPage: boolean;
	posts: LibraryItemMetadata[];
};
