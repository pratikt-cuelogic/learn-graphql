import { extendObservable, toJS, observable, computed, action } from 'mobx';
import gql from 'graphql-tag';
import graphql from 'mobx-apollo';
import { GqlClient as client } from '../api/GqlClient';
import { allUsersQuery, createUserMutation, deleteUserMutation, userSubscription, filteredUsers } from './Queries/Users';

export class UserStore {
  constructor() {
    this.allUsers = graphql({ client, query: allUsersQuery });
    this.subscribe(); 
  }

  @observable allUsers = [];
  @observable column = null;
  @observable direction = null;

  get allUsers() {
    return graphql({ client, query: allUsersQuery });
  }

  set allUsers(users) {
    this.allUsers = users;
  }

  @computed get users() {
    return (this.allUsers.data && toJS(this.allUsers.data.allUsers)) || [];
  }

  @computed get loading() {
    return this.allUsers.loading;
  }

  @computed get error() {
    return (this.allUsers.error && this.allUsers.error.message) || null;
  }

  @computed get count() {
    return this.users.length;
  }

  set column(columnValue) {
    this.column = columnValue;
  }

  set direction(directionValue) {
    this.direction = directionValue;
  }

  subscribe = () => {
    const prop = 'allUsers';
    const node = 'User';
    const document = userSubscription;

    return this[prop].ref.subscribeToMore({
      document,
      updateQuery: (current, { subscriptionData }) => {
        const prev = current[prop];
        const next = subscriptionData.data[node];

        if (next.mutation === 'CREATED')
          return { [prop]: prev.concat([next.node]) };

        if (next.mutation === 'UPDATED') {
          const updated = prev.slice();
          const index = updated.findIndex(({ id }) => id === next.node.id);
          updated[index] = next.node;
          return { [prop]: updated };
        }

        return current;
      }
    });
  };

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

  filterUsers = (name) =>
  client
      .query({
        query: filteredUsers,
        variables: { name },
        //refetchQueries: [{ query: allUsersQuery }]
      })
      .then((data) => console.log(data.data.allUsers))
      .catch(error => console.error(error.message));
    // this.allUsers = graphql({ client, query: filteredUsers, variables: { name } });
}

export default new UserStore();