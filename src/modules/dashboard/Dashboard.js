import React, {Component} from 'react';
import Clock from './Clock';

class Dashboard extends Component {
	render() {
		return (
			<div className="content">
				<Clock />
			</div>
		);
	}
}

export default Dashboard;
