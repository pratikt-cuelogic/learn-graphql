import React, {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';

class About extends Component {
	notify = () => toast("Wow so easy !");

	render() {
		return (
			<div className="content">
				This is what about us page looks like !
				<button onClick={this.notify}>Notify !</button>
				<ToastContainer />
			</div>
		);
	}
}

export default About;
