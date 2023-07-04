import { gql } from '@apollo/client';
import graphCMS from 'lib/apollo-client';
import { IProject } from '../models/projects';

/**
 * GET POSTS BY SLUG
 * Query to get a single project based on the current URL.
 * */
const PROJECT_BY_SLUG = gql`
	query PostBySlug($projectsWhere: ProjectWhereInput) {
		projects(where: $projectsWhere) {
			name
			slug
			content
			updatedAt
			description
			date
			cover {
				url
			}
			skills {
				... on Skill {
					name
					icon {
						url
					}
				}
			}
		}
	}
`;

const getProjectBySlug = async (slug: string): Promise<IProject> => {
	let project = null;

	try {
		const { projects } = (
			await graphCMS.query({
				query: PROJECT_BY_SLUG,
				variables: {
					projectsWhere: { slug },
				},
			})
		).data;

		[project] = projects;
	} catch (e) {
		throw new Error(e as string);
	}

	return project;
};

/**
 * Query to get the slugs of all the published projects.
 * */
const GET_PROJECTS_SLUG = gql`
	query AllProjectsSlugs {
		projects {
			slug
		}
	}
`;

const getAllProjectsSlugs = async (): Promise<Array<string>> => {
	const { projects } = (
		await graphCMS.query({
			query: GET_PROJECTS_SLUG,
		})
	).data;

	const slugs = projects?.map((project: IProject) => `/projects/${project.slug}`);
	return slugs;
};

const GET_PROJECTS_CARDS = gql`
	query Query($projectsOrderBy: ProjectOrderByInput, $projectsFirst: Int) {
		projects(orderBy: $projectsOrderBy, first: $projectsFirst) {
			name

			description
			slug
			previewUrl
			sourcesUrl
			cover {
				url
			}
			skills {
				... on Skill {
					name
					icon {
						url
					}
				}
			}
		}
	}
`;

const getProjectsCards = async (limit: number): Promise<Array<IProject>> => {
	let fetchedProjects = null;

	try {
		const { projects } = (
			await graphCMS.query({
				query: GET_PROJECTS_CARDS,
				variables: {
					projectsFirst: limit,
					projectsOrderBy: 'date_DESC',
				},
			})
		).data;
		fetchedProjects = projects;
	} catch (e) {
		throw new Error(e as string);
	}
	return fetchedProjects;
};

export { getAllProjectsSlugs, getProjectsCards, getProjectBySlug };
