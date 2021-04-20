import gql from 'graphql-tag';

const GET_USER = gql`
  query GetUser {
    me {
      id
      email
      name
    }
  }
`

export { GET_USER }
