import React, { Component } from 'react';
import Listing from '../components/Listing';

class Timeline extends Component {
  state = {
    'search_on' : false
  };

  ToggleSearch = () => {
    this.setState({search_on: !this.state.search_on});
  }

  render() {
    const listData = [
      {datetime: 'An hour ago', description: 'Ate lunch'},
      {datetime: '10 am', description: 'Read day two artical'},
      {datetime: 'yesterday', description: 'Confirm that ou test setup is working properly'},
      {datetime: 'year 2012', description: 'watching faltu movies'}
    ];

    return (
      <div className="Timeline">
        <h1>Timeline <span onClick={this.ToggleSearch}>search</span></h1>
        <Listing search_on={this.state.search_on} listData={listData} />
      </div>
    );
  }
}

export default Timeline;

/*
test cases:
 - timeline contained within .Timeline className
 - Under all circumstances, there will be a title
 - There is a list of status updates

 : follow-up tests ith Enzyme
*/