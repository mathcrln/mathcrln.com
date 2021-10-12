import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import ImageCard from 'src/common/ImageCard';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import relativeDate from 'relative-date';
import Page from '@/layout/Page';
import { IPost } from '@/components/blog/PostCard';
import PageHeader from 'src/common/PageHeader';
import { parseISO, format } from 'date-fns';
import Image from 'next/image';
import { getAllPostsSlugs, getPostBySlug } from '@/graphql/queries/posts';
import ContentArticle from 'src/common/ContentArticle';

export default function Post({ post, source }: Props): JSX.Element {
	return (
		<Page title={post ? post.title : ''} image={post.cover.url} description={post ? post.excerpt : ''}>
			<section>
				{!post && <p className='my-14 relative'>Seems like no post with this name has been found</p>}
				{post && (
					<div>
						<div className='mb-20 lg:grid-cols-2 grid gap-10 md:gap-5 items-center'>
							<div>
								<PageHeader title={post.title}>
									<p>{post.excerpt}</p>
								</PageHeader>
								<div className='flex items-center'>
									<Image
										alt='Mathieu Céraline'
										height={24}
										width={24}
										src='/avatar.jpg'
										className='rounded-full'
									/>
									<span className='ml-2'>
										Mathieu Céraline • {format(parseISO(post.date), 'MMMM dd, yyyy')}
									</span>
								</div>
							</div>
							<ImageCard cover={post.cover} className='h-80 xl:-mr-20 ' />
						</div>

						<ContentArticle source={source} />

						{post.updatedAt && (
							<p className='text-gray-600 dark:text-gray-400'>
								Last updated: {relativeDate(new Date(post.updatedAt))}
							</p>
						)}
					</div>
				)}
			</section>
		</Page>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const slugs = await getAllPostsSlugs();

	return {
		paths: slugs,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const { slug } = context.params as Params;
	const post = await getPostBySlug(slug);

	const { content } = post;

	const mdxSource = await serialize(content);

	return {
		props: {
			post: {
				...post,
				publishDate: post.date || null,
			},
			source: mdxSource,

			revalidate: 1,
		},
	};
};

type Props = {
	post: IPost;
	source: MDXRemoteSerializeResult;
};

interface Params extends ParsedUrlQuery {
	slug: string;
}
