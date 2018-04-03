import React, { Component, PropTypes } from 'react';
import FormInput from './../../form/form-input'
import { observer } from 'mobx-react'

@observer
class LoginForm extends Component {
  render() {
    const {form, onChange} = this.props;
    return (
      <form onSubmit={this.submit}>
        <h3>Login</h3>
        <FormInput type="email"
                   name="email"
                   value={form.fields.email.value}
                   error={form.fields.email.error}
                   onChange={onChange}
                   placeholder="email"/>
        <FormInput type="password"
                   name="password"
                   value={form.fields.password.value}
                   error={form.fields.password.error}
                   onChange={onChange}
                   placeholder="password"/>

        {form.meta.error && <div> {form.meta.error} </div>}

        <input disabled={!form.meta.isValid}
               value="Continue"
               type="submit"/>
      </form>
    )
  }
  submit = (event) => {
    event.preventDefault();
    this.props.onSubmit()
  }
}
// LoginForm.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   onSubmit: PropTypes.func.isRequired,
//   form: PropTypes.shape({
//     fields: Object,
//     meta: Object
//   }).isRequired
// };
export default LoginForm