import gql from 'graphql-tag';

// queries, mutations and subscriptions
export const allUsersQuery = gql`
  query allUsers($first: Int!, $skip: Int!) {
    allUsers(first: $first, skip: $skip) {
      id
      email
    }
    _allUsersMeta {
      count
    }
  }
`;

export const createUserMutation = gql`
  mutation createUser($firstName: String!, $middleName: String!, $lastName: String!, $email: String!, $accountType: USER_ACCOUNT_TYPE! , $accredited: Boolean!, $lastLogin: DateTime!) {
    createUser(firstName: $firstName, middleName: $middleName, lastName: $lastName, email: $email, accountType: $accountType, accredited: $accredited, lastLogin: $lastLogin) {
      id
      firstName
      middleName
      lastName
      email
      accountType
      accredited
      lastLogin
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
    User(filter: { mutation_in: [CREATED, UPDATED, DELETED] }) {
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