import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {
  Form, Input, TextArea, Checkbox, Radio, RadioGroup, Dropdown, Select, Label,
} from 'formsy-semantic-ui-react';

@observer
export default class Register extends Component {
  render() {
    const errorLabel = <Label color="red" pointing/>
    return (
      <Form
      onValidSubmit={ alert(1) }
    >
      <Form.Input
        name="name"
        label="Name"
        validations="isEmail"
        validationErrors={{ isEmail: 'Email not valid' }}
        errorLabel={ errorLabel }
      />
      <Form.Input
        name="email"
        label="Email"
        validations="isEmail"
        validationErrors={{ isEmail: 'Email not valid' }}
        errorLabel={ errorLabel }
      />
      <Form.Input
        name="email"
        label="Email"
        validations="isEmail"
        validationErrors={{ isEmail: 'Email not valid' }}
        errorLabel={ errorLabel }
      />
    </Form>
    );
  }
}