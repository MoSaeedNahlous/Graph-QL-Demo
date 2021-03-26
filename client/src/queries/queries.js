import { gql,compose } from 'apollo-boost'

const getAuthorsQuery = gql`
{
    authors{
        name
        age
        id
    }
}
`
const getBooksQuery = gql`
{
    books{
        name
        id  
    }
}
`


export {getBooksQuery, getAuthorsQuery};