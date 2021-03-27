import React from 'react';
import ApolloClient from 'apollo-boost'
import BookList from './components/BookList.js'
import {ApolloProvider} from 'react-apollo'
import AddNewBook from './components/AddNewBook.js';
import AddNewAuthor from './components/AddNewAuthor.js';
import UpdateBook from './components/UpdateBook.js';
import UpdateAuthor from './components/UpdateAuthor.js';


//Apollo Client Setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})


const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1 className="title">Library App</h1>
        <BookList />
        <AddNewBook />
        <AddNewAuthor />
        <UpdateBook />
        <UpdateAuthor />
      </div>
    </ApolloProvider>
  );
}

export default App;
