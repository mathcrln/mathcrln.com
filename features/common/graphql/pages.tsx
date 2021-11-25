import { gql } from '@apollo/client';
import graphCMS from '../../../lib/apollo-client';
import { IPage } from '../models/pages';

const PAGE_BY_SLUG = gql`
	query PageBySlug($pagesWhere: PageWhereInput) {
		pages(where: $pagesWhere) {
			title
			subtitle
			slug
			content
			updatedAt
		}
	}
`;

const GET_ALL_PAGE_SLUGS = gql`
	query AllPageSlugs {
		pages {
			slug
		}
	}
`;

const getAllpageSlugs = async (): Promise<IPage[]> => {
	let allPages = null;

	try {
		const { pages } = (
			await graphCMS.query({
				query: GET_ALL_PAGE_SLUGS,
			})
		).data;

		allPages = pages;
	} catch (e) {
		throw new Error(e as string);
	}

	return allPages;
};
const getPageBySlug = async (slug: string): Promise<IPage> => {
	let page = null;

	try {
		const { pages } = (
			await graphCMS.query({
				query: PAGE_BY_SLUG,
				variables: {
					pagesWhere: { slug },
				},
			})
		).data;

		[page] = pages;
	} catch (e) {
		throw new Error(e as string);
	}

	return page;
};

export { getPageBySlug, getAllpageSlugs };
