import React from 'react';

const UserCreate = (props) => {
	return (
		<div>
			<button onClick={props.createUser}>Create new random user</button>
		</div>
	)
};

export default UserCreate;