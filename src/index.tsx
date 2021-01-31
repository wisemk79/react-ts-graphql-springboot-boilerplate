import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const SERVER_URL = "http://localhost:4000/";
const cache = new InMemoryCache({}) as any;

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
    // For server with different domain use "include"
    credentials: 'include',
  }),
]) as any;

const client = new ApolloClient({
  link,
  cache
}) as any;

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
    ,
    document.getElementById('root')
);