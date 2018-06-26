import React, {Component} from 'react';
import queryString from 'query-string';
import { observer } from 'mobx-react';
import LoginForm from './LoginForm';
import LoginStore from './login/LoginStore';

import Clock from './Clock';

let loginStore = new LoginStore();
@observer
class Dashboard extends Component {
  onSubmitForm = () => {
    console.log('submitted!');
    console.log(loginStore.form);
  }
	render() {
		return (
			<div className="content">
        <LoginForm onSubmit={this.onSubmitForm}
         form={loginStore.form}
         onChange={loginStore.onFieldChange}/>
			</div>
		);
	}
}

export default Dashboard;


//
//https://medium.com/@KozhukharenkoN/react-form-validation-with-mobx-8ce00233ae27
// https://formstate.github.io/demos/
//
