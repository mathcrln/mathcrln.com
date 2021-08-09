import PageHeader from '@/components/common/PageHeader';
import Page from '@/layout/Page';
import ImageCard from '@/components/common/ImageCard';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';
import { serialize } from 'next-mdx-remote/serialize';
import { getAllArchivesSlugs, getArchiveBySlug } from '@/graphql/queries/archives';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IBook } from '@/types/books';
import ContentArticle from '@/components/common/ContentArticle';
import AuthorDate from '@/components/common/AuthorDate';

export default function ArchivePage({ archive, source }: Props): JSX.Element {
	return (
		<Page title={archive.name}>
			<header className='grid md:grid-cols-[1fr,2fr]'>
				<ImageCard cover={archive.cover} height={375} width={248} className='h-initial place-self-center' />
				<PageHeader title={archive.name}>
					<p className='block mb-5'>{archive.author}</p>
					<p>{archive.description}</p>
					<AuthorDate date={archive.date} />
				</PageHeader>
			</header>
			<ContentArticle source={source} />
		</Page>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const slugs = await getAllArchivesSlugs();

	return {
		paths: slugs,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const { slug } = context.params as Params;
	const archive = await getArchiveBySlug(slug);

	const { content } = archive;
	const mdxSource = await serialize(content);

	return {
		props: {
			archive: {
				...archive,
			},
			source: mdxSource,

			revalidate: 1,
		},
	};
};

type Props = {
	archive: IBook;
	source: MDXRemoteSerializeResult;
};

interface Params extends ParsedUrlQuery {
	slug: string;
}
