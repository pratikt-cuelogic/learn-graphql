import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import fileDownload from 'react-file-download';
import { RANDOM_USER } from './../../../constants/Constants';
import UserList from '../components/UserList';
import UserCreate from '../components/UserCreate';
import _ from 'lodash';

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

  filterUsers = (e) => {
    this.props.userStore.filterUsers(e.target.value);
  }

  handleDownload = () => {
    alert(11);
    let data = `<CD>
    <TITLE>When a man loves a woman</TITLE>
    <ARTIST>Percy Sledge</ARTIST>
    <COUNTRY>USA</COUNTRY>
    <COMPANY>Atlantic</COMPANY>
    <PRICE>8.70</PRICE>
    <YEAR>1987</YEAR>
    </CD>`;
    fileDownload(data, 'test1.xml');
  }

  handleSort = clickedColumn => () => {

    const { allUsers, column, direction } = this.props.userStore;

    // let userData = {
    //   column: clickedColumn,
    //   users: _.sortBy(userInfo.userInfo, [clickedColumn]),
    //   direction: 'ascending'
    // }

    // if (userInfo.column !== clickedColumn) {
    //   this.sortUsers(userData);
    //   return
    // }

    // userData = {
    //   column: '',
    //   userInfo: userInfo.userInfo.reverse(),
    //   direction: userInfo.direction === 'ascending' ? 'descending' : 'ascending'
    // }

    // this.sortUsers(userData);
  }

  loadMore = () => this.props.userStore.loadMore();

  render () {
    const {loading, error, users, column, direction} = this.props.userStore;
    return (
      <div>
        <div>summary</div>
        <div>search</div>
        <hr/>
        <UserList
          users={users}
          loading={loading}
          error={error}
          column={column}
          direction={direction}
          deleteUser={this.deleteUser}
          handleSort={this.handleSort}
          filterUsers={this.filterUsers}
          handleDownload={this.handleDownload}
          loadMore={this.loadMore}
        />
        <UserCreate createUser={this.createUser} />
      </div>
    );
  }
}

export default Users;