import { IPost } from '@/components/blog/PostCard';
import { gql } from '@apollo/client';
import graphCMS from '../apollo-client';

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
		throw new Error(e);
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
	query Query($postsOrderBy: PostOrderByInput, $postsFirst: Int) {
		posts(orderBy: $postsOrderBy, first: $postsFirst) {
			title
			slug
			excerpt
			cover {
				url
			}
		}
	}
`;

const getPostsCards = async (limit: number): Promise<Array<IPost>> => {
	let fetchedPosts = null;

	try {
		const { posts } = (
			await graphCMS.query({
				query: GET_POSTS_CARDS,
				variables: {
					postsFirst: limit,
					postsOrderBy: 'date_DESC',
				},
			})
		).data;
		fetchedPosts = posts;
	} catch (e) {
		throw new Error(e);
	}
	return fetchedPosts;
};

export { getPostsCards, getAllPostsSlugs, getPostBySlug };
