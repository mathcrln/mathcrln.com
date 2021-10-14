import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import ImageCard from '@/common/components/ImageCard';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import relativeDate from 'relative-date';
import Page from '@/layout/Page';
import { IPost } from '@/modules/posts/components/PostCard';
import PageHeader from '@/common/components/PageHeader';
import { getAllPostsSlugs, getPostBySlug } from '@/modules/posts/graphql/posts';
import ContentArticle from '@/common/components/ContentArticle';
import Author from '@/common/components/Author';
import PostDate from '@/common/components/Date';

export default function Post({ post, source }: Props): JSX.Element {
	return (
		<Page title={post ? post?.title : ''} image={post?.cover?.url} description={post ? post?.excerpt : ''}>
			<section>
				{!post && <p className='my-14 relative'>Seems like no post with this name has been found</p>}
				{post && (
					<div>
						<div className='mb-20 lg:grid-cols-2 grid gap-10 md:gap-5 items-center'>
							<div className='space-y-5'>
								<PostDate date={post.date} />
								<PageHeader title={post.title}>
									<p>{post.excerpt}</p>
								</PageHeader>
								<Author />
							</div>
							<ImageCard cover={post.cover} className='h-80 xl:-mr-10' />
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
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const { slug } = context.params as Params;
	const post = await getPostBySlug(slug);

	if (!post) {
		return {
			notFound: true,
		};
	}

	const source =
		post &&
		(await serialize(post?.content, {
			mdxOptions: {
				// eslint-disable-next-line global-require
				remarkPlugins: [require('remark-code-titles')],
				rehypePlugins: [mdxPrism],
			},
		}));

	return {
		props: {
			post: {
				...post,
				publishDate: post?.date || null,
			},
			source,
		},
		revalidate: 60,
	};
};

type Props = {
	post: IPost;
	source: MDXRemoteSerializeResult;
};

interface Params extends ParsedUrlQuery {
	slug: string;
}
