import { extendObservable, toJS } from 'mobx';
import gql from 'graphql-tag';
import graphql from 'mobx-apollo';
import { GqlClient as client } from '../api/GqlClient';
import { allUsersQuery, createUserMutation, deleteUserMutation } from './Queries/Users';

export class UserStore {
  constructor() {
    extendObservable(this, {
      get allUsers() {
        return graphql({ client, query: allUsersQuery });
      },
      get error() {
        return (this.allUsers.error && this.allUsers.error.message) || null;
      },
      get loading() {
        return this.allUsers.loading;
      },
      get users() {
        return (this.allUsers.data && toJS(this.allUsers.data.allUsers)) || [];
      },
      get count() {
        return this.users.length;
      }
    });
  }
 
  createUser = (name, email, city, state, ssn, dateOfBirth) =>
    client
      .mutate({
        mutation: createUserMutation,
        variables: { name, email, city, state, ssn, dateOfBirth },
        refetchQueries: [{ query: allUsersQuery }]
      })
      .then(() => console.warn('Created a new user ..'))
      .catch(error => console.error(error.message));

  deleteUser = (id) =>
    client
      .mutate({
        mutation: deleteUserMutation,
        variables: { id },
        refetchQueries: [{ query: allUsersQuery }]
      })
      .then(() => console.warn('Deleted user ..'))
      .catch(error => console.error(error.message));
}

export default new UserStore();