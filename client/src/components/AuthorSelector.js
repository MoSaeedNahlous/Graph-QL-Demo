import React, { Fragment } from 'react';
import { gql } from 'apollo-boost'
//binding react and apollo
import { graphql } from 'react-apollo'

const getAuthorsQuery = gql`
{
    authors{
        name
        age
        id
    }
}
`
function AuthorSelector(props) {
    return (
        <Fragment>
            <select>
                {props.data.loading !== true ? (
                    props.data.authors.map((author) => {
                        return (<option key={author.id} value={author.name}>{ author.name}</option>)
                    })
                ):(<option  disabled defaultValue="">Loading Authors</option>)}
            </select>
        </Fragment>
    )
}

export default graphql(getAuthorsQuery)(AuthorSelector);
