import React from 'react';

const ShowData = (props) => {
  if(props.loading) {
    return <tr><td colSpan='7'>loading..</td></tr>;
  } else if (props.error) {
    return <tr><td colSpan='7'>error loading users</td></tr>;
  } else {
    return props.users.map(u => {
      return (
        <tr key={u.id}>
          <td>{u.name}</td>
          <td>{u.email}</td>
          <td>{u.city}</td>
          <td>{u.state}</td>
          <td>{u.ssn}</td>
          <td>{u.dateOfBirth}</td>
          <td><a onClick={() => props.deleteUser(u.id)}>delete</a></td>
        </tr>
      );
    })
  }
};

const UserList = (props) => {
  return (
    <table className="chamunda">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email ID</th>
          <th>City</th>
          <th>State</th>
          <th>SSN</th>
          <th>DOB</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <ShowData {...props}/>
      </tbody>  
    </table>
  )
};

export default UserList;
