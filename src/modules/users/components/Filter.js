import React from 'react';
import { Form, Button} from 'semantic-ui-react';

const Filter = (props) => {
  return (
    <div>
      <Form>
        <Form.Group inline>
          <Form.Input
            placeholder="Name"
            name="filterName"
            defaultValue={props.filterData.filterName}
            onChange={props.setFilterValues}
          />
          <Form.Input
            placeholder="Email"
            name="filterEmail"
            defaultValue={props.filterData.filterEmail}
            onChange={props.setFilterValues}
          />
          <Button onClick={props.filterUsers}>Search</Button>
          <Button onClick={props.reset}>Reset</Button>
        </Form.Group>
      </Form>
    </div>
  )
};

export default Filter;