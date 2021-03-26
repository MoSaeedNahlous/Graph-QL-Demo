import React from 'react';
import { getBooksQuery } from '../queries/queries.js'
//binding react and apollo
import { graphql } from 'react-apollo'


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