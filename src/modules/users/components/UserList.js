import React from 'react';
import { Table } from 'semantic-ui-react';
import Filter from './Filter';

const ShowData = (props) => {
  if(props.loading) {
    return <Table.Row><Table.Cell colSpan='7'>loading..</Table.Cell></Table.Row>;
  } else if (props.error) {
    return <Table.Row><Table.Cell colSpan='7'>error loading users</Table.Cell></Table.Row>;
  } else {
    return props.users.map(u => {
      return (
        <Table.Row key={u.id}>
          <Table.Cell>{u.name}</Table.Cell>
          <Table.Cell>{u.email}</Table.Cell>
          <Table.Cell>{u.city}</Table.Cell>
          <Table.Cell>{u.state}</Table.Cell>
          <Table.Cell>{u.ssn}</Table.Cell>
          <Table.Cell>{u.dateOfBirth}</Table.Cell>
          <Table.Cell><a onClick={() => props.deleteUser(u.id)}>delete</a></Table.Cell>
        </Table.Row>
      );
    })
  }
};

const UserList = (props) => {
    const { filterData, filterUsers, setFilterValues, reset, handleSort } = props;

    return (
      <div>
        <Filter
          filterData={filterData}
          filterUsers={filterUsers}
          setFilterValues={setFilterValues}
          reset={reset}
        />
        <Table sortable celled fixed className="chamunda">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell onClick={handleSort('name')}>
                Name
              </Table.HeaderCell >
              <Table.HeaderCell onClick={handleSort('email')}>
                Email ID
              </Table.HeaderCell>
              <Table.HeaderCell onClick={handleSort('city')}>
                City 
              </Table.HeaderCell>
              <Table.HeaderCell onClick={handleSort('state')}>
                State 
              </Table.HeaderCell >
              <Table.HeaderCell onClick={handleSort('ssn')}>
                SSN 
              </Table.HeaderCell>
              <Table.HeaderCell onClick={handleSort('dateOfBirth')}>
                DOB 
              </Table.HeaderCell>
              <Table.HeaderCell>
                Action 
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
    
          <Table.Footer>
            <Table.Row>
              <Table.Cell>
              <a onClick={props.loadMore}>load more</a>
              </Table.Cell>
            </Table.Row>
          </Table.Footer>

          <Table.Body>
            <ShowData {...props}/>
          </Table.Body> 
        </Table>
      </div>
    )
  };

export default UserList;