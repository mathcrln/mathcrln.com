import { gql } from '@apollo/client';
import { IBook } from 'features/archives/models/books';
import graphCMS from 'lib/apollo-client';

/**
 * GET ARCHIVE BY SLUG
 * Query to get a single archive based on the current URL.
 * */
const ARCHIVE_BY_SLUG = gql`
	query ArchiveBySlug($archivesWhere: ArchiveWhereInput) {
		archives(where: $archivesWhere) {
			name
			slug
			content
			updatedAt
			type
			date
			author
			description
			cover {
				url
			}
		}
	}
`;

const getArchiveBySlug = async (slug: string): Promise<IBook> => {
	let archive = null;

	try {
		const { archives } = (
			await graphCMS.query({
				query: ARCHIVE_BY_SLUG,
				variables: {
					archivesWhere: { slug },
				},
			})
		).data;

		[archive] = archives;
	} catch (e: unknown) {
		throw new Error(e as string);
	}

	return archive;
};

/**
 * Query to get the slugs of all the published archives.
 * */
const GET_ARCHIVES_SLUGS = gql`
	query AllArchivesSlugs {
		archives {
			slug
		}
	}
`;

const getAllArchivesSlugs = async (): Promise<Array<string>> => {
	const { archives } = (
		await graphCMS.query({
			query: GET_ARCHIVES_SLUGS,
		})
	).data;

	const slugs = archives?.map((archive: IBook) => `/library/${archive.slug}`);
	return slugs;
};

const GET_ARCHIVES_CARDS = gql`
	query Query($archivesOrderBy: ArchiveOrderByInput, $archivesFirst: Int, $exceptSlug: String) {
		archives(orderBy: $archivesOrderBy, first: $archivesFirst, where: { NOT: { slug: $exceptSlug } }) {
			name
			slug
			description
			author
			date
			type
			cover {
				height
				width
				url
			}
		}
	}
`;

const getArchivesCards = async (limit: number, except?: { slug?: string }): Promise<Array<IBook>> => {
	let fetchedArchives = null;

	try {
		const { archives } = (
			await graphCMS.query({
				query: GET_ARCHIVES_CARDS,
				variables: {
					archivesFirst: limit,
					archivesOrderBy: 'date_DESC',
					exceptSlug: except?.slug ?? '',
				},
			})
		).data;
		fetchedArchives = archives;
	} catch (e: unknown) {
		throw new Error(e as string);
	}
	return fetchedArchives;
};

const getPreviewArchiveBySlug = async (slug: string): Promise<IBook> => {
	let archive = null;

	try {
		const { archives } = (
			await graphCMS.query({
				query: ARCHIVE_BY_SLUG,
				variables: {
					archivesWhere: { slug },
				},
				context: {
					headers: {
						Authorization: `Bearer ${
							process.env.NODE_ENV === 'development'
								? process.env.GRAPHCMS_DEV_AUTH_TOKEN
								: process.env.GRAPHCMS_PROD_AUTH_TOKEN
						}`,
					},
				},
			})
		).data;

		[archive] = archives;
	} catch (e) {
		throw new Error(e as string);
	}

	return archive;
};

export { getArchiveBySlug, getAllArchivesSlugs, getArchivesCards, getPreviewArchiveBySlug };
