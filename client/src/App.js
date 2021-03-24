import React from 'react';
import ApolloClient from 'apollo-boost'
import BookList from './components/BookList.js'
import {ApolloProvider} from 'react-apollo'
import AuthorSelector from './components/AuthorSelector.js';
import AddNewBook from './components/AddNewBook.js';

//Apollo Client Setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})


const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Library App</h1>
        <BookList />
        <AuthorSelector />
        <AddNewBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
