import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GraphQLClient, ClientContext } from 'graphql-hooks';

const client = new GraphQLClient({
  url: process.env.REACT_APP_DATOCMS_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClientContext.Provider value={client}>
    <App />
  </ClientContext.Provider>
);
