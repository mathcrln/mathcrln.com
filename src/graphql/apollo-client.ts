import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: `${process.env.BACKEND_URL}/graphql`,
	cache: new InMemoryCache(),
});

const graphCMSClient = new ApolloClient({
	uri: `${process.env.GRAPH_CMS_URL}`,
	cache: new InMemoryCache(),
});

export default client;
export { graphCMSClient };
