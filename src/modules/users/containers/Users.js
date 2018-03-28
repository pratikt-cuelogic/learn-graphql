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

  sortUsers = (userData) => {
    this.props.userStore.setUserInfo(userData);
  }

  filterUsers = () => {
    this.props.userStore.filterUsers();
  }

  setFilterValues = (e, {name, value}) => {
    this.props.userStore.setFilterValues(name, value);
  }

  reset = () => {
    this.props.userStore.resetFilterValues();
    this.props.userStore.resetUsers();
  }

  handleSort = clickedColumn => () => {
    this.props.userStore.setSortingDirection(this.props.userStore.sortingDirection);
    this.props.userStore.sortUsers(clickedColumn);
  }

  loadMore = () => this.props.userStore.loadMore();

  render () {
    const {loading, error, users, filterData} = this.props.userStore;
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
          filterUsers={this.filterUsers}
          loadMore={this.loadMore}
          setFilterValues={this.setFilterValues}
          reset={this.reset}
          filterData={filterData}
          handleSort={this.handleSort}
        />
        <UserCreate createUser={this.createUser} />
      </div>
    );
  }
}

export default Users;