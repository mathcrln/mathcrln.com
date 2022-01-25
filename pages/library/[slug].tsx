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
			<header className='grid items-center gap-10 md:grid-cols-[1fr,2fr]'>
				<ImageCard src={archive.cover.url} height={375} width={248} className='h-initial place-self-center' />
				<PageHeader title={archive.name}>
					<p className='block font-bold'>{archive.author}</p>
					<p className='font-ligth my-5'>{archive.description}</p>
					<AuthorDate date={archive.date} />
				</PageHeader>
			</header>
			<ContentArticle source={source} />

			{suggestions.length ? (
				<section>
					<h2 className='mb-10 text-3xl font-bold'>More like that...</h2>
					<div className='grid grid-cols-2 gap-10 md:grid-cols-5'>
						{suggestions.map((book) => (
							<BookCard
								key={book.name}
								coverSrc={book.cover.url}
								title={book.name}
								author={book.author}
								url={`/library/${book.slug}`}
							/>
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
