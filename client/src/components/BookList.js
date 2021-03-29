import React, { useEffect, useState } from 'react';
import { getBooksQuery,getBookQuery } from '../queries/queries.js'
//binding react and apollo
import { graphql } from 'react-apollo'
import {flowRight as compose} from 'lodash'
import BookDetails from './BookDetails.js';


const BookList = (props) => {

    const [selected, setSelected] = useState({selectedBook:null})

    
    return (<div>
        
        <h2>this is bookList component</h2>
        <ul id="book-list">
            {props.data.loading === false ? (
                props.data.books.map(book => {
                    return (<li key={book.id} onClick={(e)=> setSelected({ selectedBook: book.id })}>{book.name}</li>)
                })
            ):(<p>Loading...</p>)}
            

        </ul>
        <br />
        <BookDetails bookId={selected.selectedBook} />
    </div>
        
    )
}

export default graphql(getBooksQuery)(BookList);