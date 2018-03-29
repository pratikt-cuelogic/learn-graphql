import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Form, Button} from 'semantic-ui-react';

@inject('userStore')
@observer
class Filter extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group inline>
            <Form.Input
              placeholder="Name"
              name="filterName"
              value={this.props.userStore.filterData.filterName}
              onChange={this.props.setFilterValues}
            />
            <Form.Input
              placeholder="Email"
              name="filterEmail"
              value={this.props.userStore.filterData.filterEmail}
              onChange={this.props.setFilterValues}
            />
            <Button onClick={this.props.filterUsers}>Search</Button>
            <Button onClick={this.props.reset}>Reset</Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
};

export default Filter;