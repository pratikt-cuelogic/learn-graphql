import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import AddUpdatePage from '../components/AddUpdatePage';
import AllPages from '../components/AllPages';

class PageBuilder extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="content">
        <Switch>
          <Route exact path="/app/page-builder" component={AllPages} />
          <Route exact path="/app/page-builder/:id" component={AddUpdatePage} />
        </Switch>
      </div>
    );
  }
}

export default PageBuilder;
