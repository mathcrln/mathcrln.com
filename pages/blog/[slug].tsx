import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import ImageCard from '@/common/components/ImageCard';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import relativeDate from 'relative-date';
import Page from '@/layout/Page';
import { IPost } from '@/modules/posts/components/PostCard';
import PageHeader from '@/common/components/PageHeader';
import { parseISO, format } from 'date-fns';
import Image from 'next/image';
import { getAllPostsSlugs, getPostBySlug } from '@/modules/posts/graphql/posts';
import ContentArticle from '@/common/components/ContentArticle';
import Twitter from '@/common/components/icons/Twitter';
import Github from '@/common/components/icons/Github';
import React from 'react';
import Link from 'next/link';

export default function Post({ post, source }: Props): JSX.Element {
	return (
		<Page title={post ? post.title : ''} image={post.cover.url} description={post ? post.excerpt : ''}>
			<section>
				{!post && <p className='my-14 relative'>Seems like no post with this name has been found</p>}
				{post && (
					<div>
						<div className='mb-20 lg:grid-cols-2 grid gap-10 md:gap-5 items-center'>
							<div className='space-y-5'>
								<span className='bg-primary-light text-white rounded-md py-1 px-3'>
									{format(parseISO(post.date), 'dd/MM/yyyy')}
								</span>
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
									<Link href='/about' passHref>
										<a>
											<span className='ml-2 text-lg'>Mathieu Céraline</span>
										</a>
									</Link>
									<a href='https://twitter.com/mathcrln' target='_blank' rel='noreferrer'>
										<Twitter className='w-[22px] h-[22px] ml-5 hover:text-primary-light dark:hover:text-primary-dark transform hover:rotate-12 duration-200 inline ease-in-out' />
									</a>

									<a href='https://github.com/mathcrln' target='_blank' rel='noreferrer'>
										<Github className='w-[22px] h-[22px] ml-5 hover:text-primary-light dark:hover:text-primary-dark transform hover:rotate-12 duration-200 inline ease-in-out' />
									</a>
								</div>
							</div>
							<ImageCard cover={post.cover} className='h-80 xl:-mr-20 ' />
						</div>
						<ContentArticle source={source}>
							{post.updatedAt && (
								<p className='text-gray-600 dark:text-gray-400'>
									Last updated: {relativeDate(new Date(post.updatedAt))}
								</p>
							)}
						</ContentArticle>
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
