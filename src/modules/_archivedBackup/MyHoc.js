import React, { Component } from 'react';

class MyHoc extends Component {
  render () {
    return (
      <div>
        <h1>this is my HOC ! {this.props.prop1}</h1>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default MyHoc;