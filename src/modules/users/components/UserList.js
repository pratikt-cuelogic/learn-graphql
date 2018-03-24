import React from 'react';
import { Table } from 'semantic-ui-react';

const ShowData = (props) => {
  console.log(props);
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
    console.log(props);
    const { users, loading, error, column, direction, deleteUser, handleSort, filterUsers, handleDownload } = props;

    return (
      <div>
        <input type="text" name="filter_user" onBlur={filterUsers}/>
        <a onClick={handleDownload}>Download</a>
        <Table sortable celled fixed className="chamunda">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell sorted={column === 'name' ? direction : null} onClick={handleSort('name')}>
                Name
              </Table.HeaderCell>
              <Table.HeaderCell>
                Email ID
              </Table.HeaderCell>
              <Table.HeaderCell>
                City 
              </Table.HeaderCell>
              <Table.HeaderCell>
                State 
              </Table.HeaderCell >
              <Table.HeaderCell>
                SSN 
              </Table.HeaderCell>
              <Table.HeaderCell>
                DOB 
              </Table.HeaderCell>
              <Table.HeaderCell>
                Action 
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
    
          <Table.Body>
            <ShowData {...props}/>
          </Table.Body> 
        </Table>
      </div>
    )
};

export default UserList;