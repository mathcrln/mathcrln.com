import { gql } from '@apollo/client';

const BLOGPAGE_POSTS = gql`
	query BlogPosts {
		posts {
			title
			description
			content
			slug
			content
			cover {
				height
				width
				url
				alternativeText
			}
			updated_at
		}
	}
`;
const SINGLE_POST = gql`
	query SinglePOst($postWhere: JSON) {
		posts(where: $postWhere) {
			title
			description
			content
			slug
			content
			publishDate
			cover {
				height
				width
				url
				alternativeText
			}
			updated_at
		}
	}
`;
const ALL_POSTS_SLUGS = gql`
	query Posts {
		posts {
			slug
		}
	}
`;

export { BLOGPAGE_POSTS, ALL_POSTS_SLUGS, SINGLE_POST };
