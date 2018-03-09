import { extendObservable, toJS } from 'mobx';
import graphql from 'mobx-apollo';
import { GqlClient as client } from '../api/GqlClient';
import { allUsersQuery, createUserMutation, deleteUserMutation } from './Queries/Users';

export class UserStore {
  constructor() {
    extendObservable(this, {  
      get allUsers() {
        return graphql({ client, query: allUsersQuery, variables: { first: 5, skip: 0 } });
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
        // updateQuery: (previousResult, { fetchMoreResult }) => ({
        //   allUsers: [...previousResult.allUsers, ...fetchMoreResult.allUsers]
        // })
        // update: (store, {data: {createUser} }) => {
        //   // const users = this.users;
        //   // users.push(createUser);
        //   // store.writeQuery({ query: allUsersQuery, users });
        //   // this.allUsers.data = users;
        // },
        refetchQueries: [{ query: allUsersQuery }]
      })
      .then(() => console.warn('Created a new user ..'))
      .catch(error => console.error(error.message));

  loadMore = () => // returns a promise
  this.allUsers.ref.fetchMore({
    variables: { skip: this.users.length },
    updateQuery: (previousResult, { fetchMoreResult }) => ({
      allUsers: [...previousResult.allUsers, ...fetchMoreResult.allUsers]
    })
  }); // reference: https://github.com/sonaye/mobx-apollo/issues/6#issuecomment-328302121

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