import { gql } from '@apollo/client';

const FEATURED_PROJECT = gql`
	query Projects {
		projects(sort: "published_at:desc", limit: 1, start: 0) {
			name
			id
			content
			description
			cover {
				height
				width
				url
				alternativeText
			}
			skills {
				name
				icon {
					url
					height
					width
				}
			}
			slug
			tags {
				name
			}
		}
	}
`;

const ALL_PROJECTS_SLUGS = gql`
	query Projects {
		projects {
			slug
		}
	}
`;

const PROJECT_PAGE = gql`
	query Project($projectsWhere: JSON) {
		projects(where: $projectsWhere) {
			name
			id
			content
			description
			cover {
				height
				width
				url
				alternativeText
			}
			skills {
				name
				icon {
					url
					height
					width
				}
			}
			slug
			tags {
				name
			}
		}
	}
`;

const PROJECTS_EXCEPT_LAST = gql`
	query Projects {
		projects(sort: "published_at:desc", limit: 6, start: 1) {
			name
			id
			content
			description
			cover {
				height
				width
				url
				alternativeText
			}
			skills {
				name
				icon {
					url
					height
					width
				}
			}
			slug
			tags {
				name
			}
		}
	}
`;

export { FEATURED_PROJECT, ALL_PROJECTS_SLUGS, PROJECTS_EXCEPT_LAST, PROJECT_PAGE };
