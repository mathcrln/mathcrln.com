import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import ImageCard from 'components/ImageCard';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import relativeDate from 'relative-date';
import Page from 'components/layout/Page';
import PostCard, { IPost } from 'features/blog/components/PostCard';
import PageHeader from 'components/PageHeader';
import { getAllPostsSlugs, getPostBySlug, getPostsCards, getPreviewPostBySlug } from 'features/blog/graphql/posts';
import ContentArticle from 'components/ContentArticle';
import Author from 'components/Author';
import PostDate from 'components/Date';

export default function Post({ post, source, suggestions }: Props): JSX.Element {
	return (
		<Page
			seo={{
				title: post?.title || '',
				image: post?.cover?.url,
				description: post?.excerpt || '',
				type: 'article',
				publishedTime: post?.date || undefined,
				modifiedTime: post?.updatedAt || undefined,
			}}
		>
			<section>
				{!post && <p className='relative my-14'>Seems like no post with this name has been found</p>}
				{post && (
					<div>
						<div className='mb-20 grid items-center gap-10 md:gap-5 lg:grid-cols-2'>
							<div className='space-y-5'>
								<PostDate date={post.date} />
								<PageHeader title={post.title}>
									<p>{post.excerpt}</p>
								</PageHeader>
								<Author />
							</div>
							<ImageCard src={post.cover.url} className='h-80 xl:-mr-10' />
						</div>
						<ContentArticle source={source}>
							{post.updatedAt && (
								<p className='text-gray-600 dark:text-gray-400'>
									Last updated: {relativeDate(new Date(post.updatedAt))}
								</p>
							)}
						</ContentArticle>
						{suggestions.length && (
							<section className='my-10'>
								<h2 className='mb-10 text-3xl font-bold'>More like that...</h2>
								<div className='grid gap-10 md:grid-cols-2 lg:grid-cols-2'>
									{suggestions.map((suggested) => (
										<PostCard post={suggested} key={suggested.slug} />
									))}
								</div>
							</section>
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
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const { slug } = context.params as Params;
	const post = await (context.preview ? getPreviewPostBySlug(slug) : getPostBySlug(slug));

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

	const suggestions = await getPostsCards(2, { slug });

	return {
		props: {
			post: {
				...post,
				publishDate: post?.date || null,
			},
			source,
			suggestions,
		},
		revalidate: 3600 * 24 * 7,
	};
};

type Props = {
	post: IPost;
	suggestions: IPost[];
	source: MDXRemoteSerializeResult;
};

interface Params extends ParsedUrlQuery {
	slug: string;
}
