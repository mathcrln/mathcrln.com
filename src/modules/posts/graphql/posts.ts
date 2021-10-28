import { IPost } from '@/modules/posts/components/PostCard';
import { gql } from '@apollo/client';
import graphCMS from '../../../lib/apollo-client';

/**
 * GET POSTS BY SLUG
 * Query to get a single post based on the current URL.
 * */
const POST_BY_SLUG = gql`
	query PostBySlug($postsWhere: PostWhereInput) {
		posts(where: $postsWhere) {
			title
			slug
			content
			updatedAt
			excerpt
			date
			cover {
				url
			}
		}
	}
`;

const getPostBySlug = async (slug: string): Promise<IPost> => {
	let post = null;

	try {
		const { posts } = (
			await graphCMS.query({
				query: POST_BY_SLUG,
				variables: {
					postsWhere: { slug },
				},
			})
		).data;

		[post] = posts;
	} catch (e) {
		throw new Error(e as string);
	}

	return post;
};

/**
 * Query to get the slugs of all the published posts.
 * */
const GET_POSTS_SLUGS = gql`
	query AllPostsSlugs {
		posts {
			slug
		}
	}
`;

const getAllPostsSlugs = async (): Promise<Array<string>> => {
	const { posts } = (
		await graphCMS.query({
			query: GET_POSTS_SLUGS,
		})
	).data;

	const slugs = posts?.map((post: IPost) => `/blog/${post.slug}`);
	return slugs;
};

const GET_POSTS_CARDS = gql`
	query Query($postsOrderBy: PostOrderByInput, $postsFirst: Int, $exceptSlug: String) {
		posts(orderBy: $postsOrderBy, first: $postsFirst, where: { NOT: { slug: $exceptSlug } }) {
			title
			slug
			excerpt
			cover {
				url
			}
		}
	}
`;

const getPostsCards = async (limit: number, except?: { slug?: string }): Promise<Array<IPost>> => {
	let fetchedPosts = null;

	try {
		const { posts } = (
			await graphCMS.query({
				query: GET_POSTS_CARDS,
				variables: {
					postsFirst: limit,
					postsOrderBy: 'date_DESC',
					exceptSlug: except?.slug ?? '',
				},
			})
		).data;
		fetchedPosts = posts;
	} catch (e) {
		throw new Error(e as string);
	}
	return fetchedPosts;
};

const getPreviewPostBySlug = async (slug: string): Promise<IPost> => {
	let post = null;

	try {
		const { posts } = (
			await graphCMS.query({
				query: POST_BY_SLUG,
				variables: {
					postsWhere: { slug },
				},
				context: {
					headers: {
						Authorization: `Bearer ${
							process.env.NODE_ENV === 'development'
								? process.env.GRAPHCMS_DEV_AUTH_TOKEN
								: process.env.GRAPHCMS_PROD_AUTH_TOKEN
						}`,
					},
				},
			})
		).data;

		[post] = posts;
	} catch (e) {
		throw new Error(e as string);
	}

	return post;
};

export { getPostsCards, getAllPostsSlugs, getPostBySlug, getPreviewPostBySlug };
