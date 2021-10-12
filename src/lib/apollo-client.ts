import { ApolloClient, InMemoryCache } from '@apollo/client';

const graphCMS = new ApolloClient({
	uri: `${process.env.GRAPH_CMS_URL}`,
	cache: new InMemoryCache(),
});

export default graphCMS;
