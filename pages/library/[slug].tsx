import PageHeader from 'src/common/PageHeader';
import Page from '@/layout/Page';
import ImageCard from 'src/common/ImageCard';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';
import { serialize } from 'next-mdx-remote/serialize';
import { getAllArchivesSlugs, getArchiveBySlug } from '@/modules/archives/graphql/archives';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IBook } from '@/modules/archives/models/books';
import ContentArticle from 'src/common/ContentArticle';
import AuthorDate from 'src/common/AuthorDate';

export default function ArchivePage({ archive, source }: Props): JSX.Element {
	return (
		<Page title={archive.name} image={archive.cover.url} description={archive.description}>
			<header className='grid md:grid-cols-[1fr,2fr] gap-10 items-center'>
				<ImageCard cover={archive.cover} height={375} width={248} className='h-initial place-self-center' />
				<PageHeader title={archive.name}>
					<p className='block font-bold'>{archive.author}</p>
					<p className='my-5 font-ligth'>{archive.description}</p>
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
