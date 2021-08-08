import { gql } from '@apollo/client';
import { IBook } from '@/types/books';
import graphCMS from '../apollo-client';

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
	} catch (e) {
		throw new Error(e);
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
	query Query($archivesOrderBy: ArchiveOrderByInput, $archivesFirst: Int) {
		archives(orderBy: $archivesOrderBy, first: $archivesFirst) {
			name
			slug
			description
			author
			date
			cover {
				height
				width
				url
			}
		}
	}
`;

const getArchivesCards = async (limit: number): Promise<Array<IBook>> => {
	let fetchedArchives = null;

	try {
		const { archives } = (
			await graphCMS.query({
				query: GET_ARCHIVES_CARDS,
				variables: {
					archivesFirst: limit,
					archivesOrderBy: 'date_DESC',
				},
			})
		).data;
		fetchedArchives = archives;
	} catch (e) {
		throw new Error(e);
	}
	return fetchedArchives;
};

export { getArchiveBySlug, getAllArchivesSlugs, getArchivesCards };
