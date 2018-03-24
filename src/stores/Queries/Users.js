import gql from 'graphql-tag';

// queries and mutations
export const allUsersQuery = gql`

  query allUsers($first: Int!, $skip: Int!) {
    allUsers(first: $first, skip: $skip) {
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

export const filteredUsers = gql`
  query filterUsers($name: String){
    allUsers(filter: {
      name: $name
    }) {
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

