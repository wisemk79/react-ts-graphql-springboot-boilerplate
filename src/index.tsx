import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
const SERVER_URL = "https://48p1r2roz4.sse.codesandbox.io";
const cache = new InMemoryCache({});

const link = ApolloLink.from([
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log('[graphQLErrors]', graphQLErrors);
    }
    if (networkError) {
      console.log('[networkError]', networkError);
    }
  }),
  new HttpLink({
    uri: SERVER_URL,
    // For server with deifferent domain use "include"
    credentials: 'same-origin',
  }),
]);

const client = new ApolloClient({
  link,
  cache,
});
// const client = new ApolloClient({
//     uri: 'https://48p1r2roz4.sse.codesandbox.io',
//   });
ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
    ,
    document.getElementById('root')
);