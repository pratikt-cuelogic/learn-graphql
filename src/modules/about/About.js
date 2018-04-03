import React, {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Autocomplete from 'react-google-autocomplete';

class About extends Component {
	notify = () => toast("Wow so easy !");

	render() {
		return (
			<div className="content">
				This is what about us page looks like !
				<button onClick={this.notify}>Notify !</button>
				<ToastContainer />
				<Autocomplete
				    style={{width: '90%'}}
				    onPlaceSelected={(place) => {
				      console.log(place);
				    }}
				    types={['(regions)']}
				/>
			</div>
		);
	}
}

export default About;
