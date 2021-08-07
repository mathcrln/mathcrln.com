import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import client, { graphCMSClient } from '@/graphql/apollo-client';
import ImageCard from '@/components/common/ImageCard';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ALL_POSTS_SLUGS, SINGLE_POST } from '@/graphql/queries/posts';
import smoothscroll from 'smoothscroll-polyfill';
import relativeDate from 'relative-date';
import Page from '@/layout/Page';
import { IPost } from '@/components/articles/components/PostCard';
import PageHeader from '@/components/common/PageHeader';
import { gql } from '@apollo/client';
import { parseISO, format } from 'date-fns';
import Image from 'next/image';

type ProjectProps = {
	post: IPost;
	source: MDXRemoteSerializeResult;
};

export default function Project({ post, source }: ProjectProps): JSX.Element {
	if (typeof window !== 'undefined') {
		smoothscroll.polyfill();
	}
	return (
		<Page
			title={post ? post.title : 'Project'}
			description={post ? post.description : 'Here is a fun project I played with.'}
			image=''
		>
			<section>
				{!post && <p className='my-14 relative'>Seems like no post with this name has been found</p>}
				{post && (
					<div>
						<div className='mb-20 lg:grid-cols-2 grid gap-10 md:gap-20 items-center'>
							<div>
								<PageHeader title={post.title} intro={post.description} />
								<div className='flex items-center'>
									<Image
										alt='Mathieu Céraline'
										height={24}
										width={24}
										src='/avatar.jpg'
										className='rounded-full'
									/>
									<span className='ml-2'>
										Mathieu Céraline • {format(parseISO(post.publishDate), 'MMMM dd, yyyy')}
									</span>
								</div>
							</div>
							<ImageCard cover={post.cover} className='h-80 xl:-mr-20 ' />
						</div>

						<article className='w-8/12 mx-auto my-24'>
							<MDXRemote {...source} />
							<p className='text-gray-600 dark:text-gray-400'>
								Last updated: {relativeDate(new Date(post.updatedAt))}
							</p>
						</article>
					</div>
				)}
			</section>
		</Page>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { posts } = (
		await graphCMSClient.query({
			query: gql`
				query BlogPosts {
					posts {
						slug
					}
				}
			`,
		})
	).data;
	console.log(posts);
	const slugs = posts?.map((post: IPost) => `/blog/${post.slug}`);

	return {
		paths: slugs,
		fallback: false,
	};
};

type Props = {
	post: IPost;
	source: MDXRemoteSerializeResult;
	revalidate: number;
};

interface Params extends ParsedUrlQuery {
	slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const { slug } = context.params as Params;

	const query = await client.query({
		query: SINGLE_POST,
		variables: {
			postWhere: { slug },
		},
	});

	const graphCMSQuery = await graphCMSClient.query({
		query: gql`
			query Query($postsWhere: PostWhereInput) {
				posts(where: $postsWhere) {
					title
					slug
					content
					updatedAt
					date
					cover {
						url
					}
				}
			}
		`,
		variables: {
			postsWhere: { slug },
		},
	});

	console.log(graphCMSQuery.data.posts);

	const content = graphCMSQuery?.data.posts[0]?.content;
	const mdxSource = await serialize(content);

	return {
		props: {
			post: {
				...graphCMSQuery.data.posts[0],
				publishDate: graphCMSQuery.data.posts[0].date || null,
				updatedAt: graphCMSQuery.data.posts[0].updatedAt,
			},
			source: mdxSource,

			revalidate: 1,
		},
	};
};
