import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import client from '@/graphql/apollo-client';
import ImageCard from '@/components/shared/ImageCard';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ALL_POSTS_SLUGS, SINGLE_POST } from '@/graphql/queries/posts';
import TableOfContents from '@/components/shared/TableOfContents';
import getTableOfContents, { ITableOfContents } from '@/utils/getTableOfContents';
import smoothscroll from 'smoothscroll-polyfill';
import relativeDate from 'relative-date';
import PageWithLeftSidebar from '@/layout/PageWithLeftSidebar';
import Sidebar from '@/layout/Sidebar';
import getStrapiMedia from '@/utils/getStrapiMedia';
import Page from '@/layout/Page';
import { IPost } from 'src/articles/components/PostCard';
import PageHeader from '@/components/shared/PageHeader';
import { parseISO, format } from 'date-fns';
import Image from 'next/image';

type ProjectProps = {
	post: IPost;
	source: MDXRemoteSerializeResult;
	toc: ITableOfContents;
};

export default function Project({ post, source, toc }: ProjectProps): JSX.Element {
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
							<div className='overflow-hidden'>
								<PageHeader title={post.title} intro={post.description} />
								<p className='flex items-center'>
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
								</p>
							</div>
							<ImageCard cover={getStrapiMedia(post.cover)} className='h-80 xl:-mr-20 ' />
						</div>
						<PageWithLeftSidebar className='my-24'>
							<Sidebar>
								<TableOfContents toc={toc} />
							</Sidebar>
							<article>
								<MDXRemote {...source} />
								<p className='text-gray-600 dark:text-gray-400'>
									Last updated: {relativeDate(new Date(post.updatedAt))}
								</p>
							</article>
						</PageWithLeftSidebar>
					</div>
				)}
			</section>
		</Page>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { posts } = (await client.query({ query: ALL_POSTS_SLUGS })).data;
	const slugs = posts?.map((post: IPost) => `/blog/${post.slug}`);

	return {
		paths: slugs,
		fallback: false,
	};
};

type Props = {
	post: IPost;
	source: MDXRemoteSerializeResult;
	toc: ITableOfContents;
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

	const content = query.data?.posts[0]?.content;
	const toc = getTableOfContents(content);
	const mdxSource = await serialize(content);

	return {
		props: {
			post: { ...query.data.posts[0], updatedAt: query.data.posts[0].updated_at },
			source: mdxSource,
			toc,

			revalidate: 60,
		},
	};
};
