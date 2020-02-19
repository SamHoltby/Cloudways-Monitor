import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { client_endpoint } from '../config';
import fetch from 'node-fetch'

function createClient({ headers }) {
  return new ApolloClient({
      uri: client_endpoint,
      fetch
  })
}

export default withApollo(createClient);
