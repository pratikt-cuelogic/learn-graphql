import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { RANDOM_USER } from './../../../constants/Constants';
import UserList from '../components/UserList';
import UserCreate from '../components/UserCreate';

@inject('userStore')
@observer
class Users extends Component {

  createUser = () => {
    const u = RANDOM_USER();
    this.props.userStore.createUser(u.name, u.email, u.city, u.state, u.ssn, u.dateOfBirth);
  }

  deleteUser = (id) => {
    this.props.userStore.deleteUser(id);
  }

  loadMore = () => this.props.userStore.loadMore();

  render () {
    const {users, loading, error} = this.props.userStore;
    return (
      <div>
        <div>summary</div>
        <div>search</div>
        <hr/>
        <UserList
          users={users}
          loading={loading}
          error={error}
          deleteUser={this.deleteUser}
          loadMore={this.loadMore}
        />
        <UserCreate createUser={this.createUser} />
      </div>
    );
  }
}

export default Users;