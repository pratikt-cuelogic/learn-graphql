import { observable, action, computed, toJS } from 'mobx';

import graphql from 'mobx-apollo';
import { GqlClient as client } from '../api/GqlClient';
import { allUsersQuery, createUserMutation, deleteUserMutation, userSubscription } from './Queries/Users';

export class UserStore {
  @observable usersData = [];

  constructor() {
    this.usersData = graphql({ client, query: allUsersQuery, variables: { first: 10, skip: 0 } });
  }

  @computed get allUsers() {
    return this.usersData;
  }

  @computed get users() {
    return (this.allUsers.data && toJS(this.allUsers.data.allUsers)) || [];
  }

  @computed get error() {
    return (this.allUsers.error && this.allUsers.error.message) || null;
  }

  @computed get loading() {
    return this.allUsers.loading;
  }

  @computed get count() {
    return this.users.length;
  }

  @action
  createUser = (firstName, middleName, lastName, email, accountType, accredited, lastLogin, createdAt, phoneNumbers) =>
    client
      .mutate({
        mutation: createUserMutation,
        variables: { firstName, middleName, lastName, email, accountType, accredited, lastLogin, createdAt, phoneNumbers }
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

  @action
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

  @action
  deleteUser = (id) =>
    client
      .mutate({
        mutation: deleteUserMutation,
        variables: { id },
        refetchQueries: [{ query: allUsersQuery, variables: { first: 10, skip: 0 }  }]
      })
      .then(() => console.warn('Deleted user ..'))
      .catch(error => console.error(error.message));
}

export default new UserStore;


// if (this.allUsers.data && this.allUsers.data.allUsers) {
//   this.allUsers.data.allUsers.forEach((u) => {
//     const { id } = u;
//     client
//       .mutate({
//         mutation: deleteUserMutation,
//         variables: { id },
//       })
//       .then(() => console.warn('Deleted user ..'))
//       .catch(error => console.error(error.message));
//   });
// }



// import React, { Component } from 'react';
// import Aux from 'react-aux';
// import { inject, observer } from 'mobx-react';
// import upperFirst from 'lodash/upperFirst';
// import Loadable from 'react-loadable';
// import UserListing from './../components/UserListing';
// import CreateNew from './../components/CreateNew';
// // import UserDetails from './../components/UserDetails';
// // import UserAccounts from './../components/UserAccounts';
// import UserModuleSubheader from './../components/UserModuleSubheader';
// import UserListingSubheader from './../components/UserListingSubheader';
// import adminActions from './../../../actions/admin';

// @inject('adminStore', 'userStore')
// @observer
// class Users extends Component {
//   componentDidMount() {
//     this.searchUsers();
//   }

//   searchUsers = () => {
//     adminActions.listUsers({ filter: '' });
//   }

//   headerMeta = [
//     ['profilepic', '', false],
//     ['full_name', 'Full Name', true],
//     ['residence_city', 'Residence City', true],
//     ['phone', 'Phone', true],
//     ['type', 'Type', true],
//     ['last_login', 'Last Login', true],
//     ['account_creation', 'Account Creation', true],
//     ['actions', '', false],
//   ];

//   render() {
//     let content = null;
//     if (this.props.location.pathname === '/app/users/new') {
//       content = (
//         <Aux>
//           <UserModuleSubheader />
//           <CreateNew />
//         </Aux>
//       );
//     } else if (this.props.match.params.userId) {
//       const loadSection = upperFirst(this.props.match.params.section) || 'UserDetails';
//       const UserSection = Loadable({
//         loader: () => import(`../components/${loadSection}`),
//         loading() {
//           return <div>Loading...</div>;
//         },
//       });
//       content = (
//         <Aux>
//           <UserModuleSubheader />
//           <UserSection />
//         </Aux>
//       );
//     } else if (this.props.adminStore && this.props.adminStore.usersList) {
//       content = (
//         <Aux>
//           <UserListingSubheader />
//           <UserListing
//             header={this.headerMeta}
//             listData={this.props.adminStore.usersList}
//             hasPagination
//           />
//         </Aux>
//       );
//     } else {
//       content = <div>loading..</div>;
//     }

//     return content;
//   }
// }

// export default Users;
