import PageHeader from '@/components/common/PageHeader';
import Page from '@/layout/Page';
import ImageCard from '@/components/common/ImageCard';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';
import { serialize } from 'next-mdx-remote/serialize';
import { getAllArchivesSlugs, getArchiveBySlug } from '@/graphql/queries/archives';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IBook } from '@/types/books';

export default function ArchivePage({ archive }: { archive: IBook }): JSX.Element {
	return (
		<Page title={archive.name}>
			<PageHeader title={archive.name} intro={archive.author} />
			<ImageCard cover={archive.cover} height={454} width={301} className='h-initial' />
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
	revalidate: number;
};

interface Params extends ParsedUrlQuery {
	slug: string;
}
