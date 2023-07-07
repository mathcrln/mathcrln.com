import { Post } from '../types';
import { gql } from '@apollo/client';
import graphCMS from '../../../lib/apollo-client';

/**
 * GET POSTS BY SLUG
 * Query to get a single post based on the current URL.
 * */
const GET_NUMBER_OF_POSTS = gql`
	query PostPaginationData {
		postsConnection {
			aggregate {
				count
			}
		}
	}
`;

const getNumberOfPosts = async (): Promise<number> => {
	const { data } = await graphCMS.query({
		query: GET_NUMBER_OF_POSTS,
	});
	return data.postsConnection.aggregate.count;
};

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

const getPostBySlug = async (slug: string): Promise<Post> => {
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

	const slugs = posts?.map((post: Post) => `/blog/${post.slug}`);
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

const GET_PAGINATED_POSTS_CARDS = gql`
	query PaginatedPosts($postsOrderBy: PostOrderByInput, $postsFirst: Int, $exceptSlug: String, $skip: Int) {
		postsConnection(orderBy: $postsOrderBy, first: $postsFirst, skip: $skip, where: { NOT: { slug: $exceptSlug } }) {
			pageInfo {
				hasNextPage
				hasPreviousPage
			}
			edges {
				node {
					title
					cover {
						url
					}
					id
					excerpt
					slug
				}
			}
		}
	}
`;

const getPaginatedPostsCards = async (
	limit: number,
	options?: { skip?: number; exceptSlug?: string }
): Promise<{ pageInfo: { hasNextPage: boolean; hasPreviousPage: boolean }; edges: { node: Post }[] }> => {
	let page = null;

	try {
		page = (
			await graphCMS.query({
				query: GET_PAGINATED_POSTS_CARDS,
				variables: {
					postsFirst: limit,
					postsOrderBy: 'date_DESC',
					skip: options?.skip ?? 0,
					exceptSlug: options?.exceptSlug ?? '',
				},
			})
		).data.postsConnection;
	} catch (e) {
		throw new Error(e as string);
	}
	return page;
};

const getPostsCards = async (limit: number, except?: { slug?: string }): Promise<Array<Post>> => {
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

const getPreviewPostBySlug = async (slug: string): Promise<Post> => {
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
							process.env.NODE_ENV === 'production'
								? process.env.GRAPHCMS_PROD_AUTH_TOKEN
								: process.env.GRAPHCMS_DEV_AUTH_TOKEN
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

export { getPostsCards, getAllPostsSlugs, getPostBySlug, getPreviewPostBySlug, getNumberOfPosts, getPaginatedPostsCards };
