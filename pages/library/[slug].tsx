import PageHeader from 'components/PageHeader';
import Page from '@/components/layout/Page';
import ImageCard from 'components/ImageCard';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';
import { serialize } from 'next-mdx-remote/serialize';
import {
	getAllArchivesSlugs,
	getArchiveBySlug,
	getPreviewArchiveBySlug,
	getArchivesCards,
} from 'features/archives/graphql/archives';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IBook } from 'features/archives/models/books';
import ContentArticle from 'components/ContentArticle';
import AuthorDate from 'components/AuthorDate';
import React from 'react';
import BookCard from 'features/archives/components/BookCard';

export default function ArchivePage({ archive, source, suggestions }: Props): JSX.Element {
	return (
		<Page
			seo={{
				title: `${archive.name} by ${archive.author}`,
				image: archive.cover.url,
				type: 'article',
				description: archive.description,
			}}
		>
			<header className='grid md:grid-cols-[1fr,2fr] gap-10 items-center'>
				<ImageCard cover={archive.cover} height={375} width={248} className='h-initial place-self-center' />
				<PageHeader title={archive.name}>
					<p className='block font-bold'>{archive.author}</p>
					<p className='my-5 font-ligth'>{archive.description}</p>
					<AuthorDate date={archive.date} />
				</PageHeader>
			</header>
			<ContentArticle source={source} />

			{suggestions.length ? (
				<section>
					<h2 className='font-bold text-3xl mb-10'>More like that...</h2>
					<div className='grid grid-cols-2 md:grid-cols-5 gap-10'>
						{suggestions.map((book) => (
							<BookCard key={book.name} book={book} />
						))}
					</div>
				</section>
			) : (
				''
			)}
		</Page>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const slugs = await getAllArchivesSlugs();

	return {
		paths: slugs,
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const { slug } = context.params as Params;
	const archive = await (context.preview ? getPreviewArchiveBySlug(slug) : getArchiveBySlug(slug));

	if (!archive) {
		return {
			notFound: true,
		};
	}

	const { content } = archive;
	const mdxSource = await serialize(content);

	const suggestions = await getArchivesCards(5, { slug });

	return {
		props: {
			archive,
			suggestions,
			source: mdxSource,

			revalidate: 1,
		},
	};
};

type Props = {
	archive: IBook;
	suggestions: IBook[];
	source: MDXRemoteSerializeResult;
};

interface Params extends ParsedUrlQuery {
	slug: string;
}
