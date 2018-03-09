import fetch from 'isomorphic-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';

global.fetch = fetch;

const uri = 'https://api.graph.cool/simple/v1/cjei7bof31u8101243cyfqgjw';

export const GqlClient = new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache()
});