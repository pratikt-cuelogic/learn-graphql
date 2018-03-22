import { extendObservable, toJS } from 'mobx';
import graphql from 'mobx-apollo';
import { GqlClient as client } from '../api/GqlClient';
import { allUsersQuery, createUserMutation, deleteUserMutation, userSubscription } from './Queries/Users';

export class UserStore {
  constructor() {
    extendObservable(this, {  
      get allUsers() {
        return graphql({ client, query: allUsersQuery, variables: { first: 10, skip: 0 } });
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

    this.subscribe();
  }
  
  createUser = (name, email, city, state, ssn, dateOfBirth) =>
    client
      .mutate({
        mutation: createUserMutation,
        variables: { name, email, city, state, ssn, dateOfBirth }
      })
      .then(() => console.warn('Created a new user ..'))
      .catch(error => console.error(error.message));

  loadMore = () => // returns a promise
  this.allUsers.ref.fetchMore({
    variables: { skip: this.users.length },
    updateQuery: (previousResult, { fetchMoreResult }) => ({
      allUsers: [...previousResult.allUsers, ...fetchMoreResult.allUsers]
    })
  }); 
  // reference: https://github.com/sonaye/mobx-apollo/issues/6#issuecomment-328302121

  subscribe = () => {
    const prop = 'allUsers';
    const node = 'User';
    const document = userSubscription;
    console.log('in subscribe 0', this[prop].ref);
    return this[prop].ref.subscribeToMore({
      document,
      updateQuery: (current, { subscriptionData }) => {
        console.log('in subscribe');

        const prev = current[prop];
        const next = subscriptionData.data[node];
        console.log(prev , next.node);
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