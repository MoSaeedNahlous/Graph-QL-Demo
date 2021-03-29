import React from 'react'
import { getBookQuery } from '../queries/queries.js'
import { graphql } from 'react-apollo'

const BookDetails = (props) => {
 const {book} = props.data
    if (book) {
        return (
            <div>
                
                <h2>{book.name}</h2>
                <h3>{book.genre}</h3>
                <h4>Authors:</h4>
                <h4>{book.author.map(auth => {
                    return <li>{auth.name}</li>
                })}</h4>
            </div>
        )
    } else {
    return (
        <div>
            <p>book details here....</p>
        </div>
        )
    }
}

export default graphql(getBookQuery,{options: (props) => {
    return {
        variables: {
            id:props.bookId
        }
    }} 
})(BookDetails)
