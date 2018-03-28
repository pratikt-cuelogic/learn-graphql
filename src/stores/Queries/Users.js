import gql from 'graphql-tag';

// queries and mutations
// reference for Filter and Sorting: https://www.graph.cool/docs/reference/graphql-api/query-api-nia9nushae/
export const allUsersQuery = gql`

  query allUsers($first: Int!, $skip: Int!, $columnName: String, $columnEmail: String, $orderByColumn: UserOrderBy) {
    allUsers(first: $first, skip: $skip, filter: {
      AND: [{
        name_contains: $columnName
      }, {
        email_contains: $columnEmail
      }],
    }, orderBy: $orderByColumn) {
      id
      name
      email
      city
      state
      ssn
      dateOfBirth
    }
    _allUsersMeta {
      count
    }
  }
`;

export const createUserMutation = gql`
  mutation createUser($name: String!, $email: String!, $city: String!, $state: String!, $ssn: String!, $dateOfBirth: DateTime!, ) {
    createUser(name: $name, email: $email, city: $city, state: $state, ssn: $ssn, dateOfBirth: $dateOfBirth) {
      id
      name
      email
      city
      state
      ssn
      dateOfBirth
    }
  }
`;

export const deleteUserMutation = gql`
  mutation deleteUser($id:  ID! ) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export const userSubscription = gql`
  subscription {
    User(filter: { mutation_in: [CREATED, UPDATED] }) {
      mutation
      node {
        id
        name
        email
        city
        state
        ssn
        dateOfBirth
      }
    }
  }
`;

