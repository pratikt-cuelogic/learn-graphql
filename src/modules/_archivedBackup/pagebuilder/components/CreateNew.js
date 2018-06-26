import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Aux from 'react-aux';
import { Header, Card, Form, Button } from 'semantic-ui-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FormInput, FormTextarea } from '../../../theme/form/FormElements';

@inject('cmsStore')
@withRouter
@observer
export default class CreateNew extends Component {
  submit = (e) => {
    e.preventDefault();
    this.props.cmsStore.createPage();
  }

  richtext = (html) => {
    this.props.cmsStore.onFieldChange('PBUILDER_FRM', 'content', html);
  }

  render() {
    const { PBUILDER_FRM, eleChange } = this.props.cmsStore;
    return (
      <Aux>
        <Header as="h3">Create new page</Header>
        <Card.Group stackable itemsPerRow={1}>
          <Card fluid>
            <Card.Content>
              <Form onSubmit={this.submit}>
                {
                  ['title', 'slug'].map(field => (
                    <FormInput
                      key={field}
                      type="text"
                      name={field}
                      fielddata={PBUILDER_FRM.fields[field]}
                      changed={eleChange}
                    />
                  ))
                }
                <Form.Field>
                  <label>Page content</label>
                  <ReactQuill
                    theme="snow"
                    onChange={this.richtext}
                    name="content"
                    value={PBUILDER_FRM.fields.content.value}
                  />
                </Form.Field>
                <div>
                  <Button disabled={!PBUILDER_FRM.meta.isValid} color="green">Submit</Button>
                  <p className="field-error">{PBUILDER_FRM.meta.error}</p>
                </div>
              </Form>
            </Card.Content>
          </Card>
        </Card.Group>
      </Aux>
    );
  }
}
