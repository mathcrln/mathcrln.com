import { gql } from '@apollo/client';

const BLOGPAGE_POSTS = gql`
	query BlogPosts {
		posts {
			slug
			content
			title
		}
	}
`;

export default BLOGPAGE_POSTS;
