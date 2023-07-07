import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import ImageCard from '@/common/components/ImageCard';
import relativeDate from 'relative-date';
import Page from '@/common/components/layout/Page';
import { PostCard, Post, PostMetadata, SerializedPost } from '@/blog';
import PageHeader from '@/common/components/PageHeader';
import ContentArticle from '@/common/components/ContentArticle';
import Author from '@/common/components/Author';
import PostDate from '@/common/components/Date';
import { getPost, getPostsStaticPaths, getSuggestions } from '@/blog/repository';

export default function Post({ post, suggestions }: Props): JSX.Element {
	return (
		<Page
			seo={{
				title: post?.title || '',
				image: post?.cover,
				description: post?.description || '',
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
									<p>{post.description}</p>
								</PageHeader>
								<Author />
							</div>
							<ImageCard src={post.cover} className='h-80 xl:-mr-10' />
						</div>
						<ContentArticle source={post.content}>
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
	const slugs = await getPostsStaticPaths();
	// const items = getItemsPathsByType({ type: 'blog' });

	// const source = fs.readFileSync(`content/blog/${items[0].params.slug}.mdx`, 'utf8');

	return {
		paths: slugs,
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const { slug } = context.params as Params;

	try {
		const post = await getPost(slug);
		const suggestions = getSuggestions(slug, 2);

		return {
			props: {
				post,
				suggestions,
			},
		};
	} catch (error: any) {
		return { notFound: true };
	}
};

type Props = {
	post: SerializedPost;
	suggestions: PostMetadata[];
};

interface Params extends ParsedUrlQuery {
	slug: string;
}
