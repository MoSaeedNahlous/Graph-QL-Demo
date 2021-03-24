import React from 'react';
import { gql } from 'apollo-boost'
//binding react and apollo
import { graphql } from 'react-apollo'

const getBooksQuery = gql`
{
    books{
        name
        id  
    }
}
`

const BookList = (props) => {
    
    return (<div>
        
        <h2>this is bookList component</h2>
        <ul id="book-list">
            {props.data.loading === false ? (
                props.data.books.map(book => {
                    return (<li key={book.id}>{book.name}</li>)
                })
            ):(<p>Loading...</p>)}
            

        </ul>
    </div>
        
    )
}

export default graphql(getBooksQuery)(BookList);