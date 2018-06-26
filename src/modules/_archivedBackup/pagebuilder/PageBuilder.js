import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateNew from './components/CreateNew';

class PageBuilder extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="content">
        <Switch>
          <Route exact path={`${match.url}`} component={CreateNew} />
        </Switch>
      </div>
    );
  }
}

export default PageBuilder;
