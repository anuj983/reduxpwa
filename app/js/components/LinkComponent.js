import React from 'react';
import { Router, Route, Link } from 'react-router';

class LinkComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav>
        <a href={this.props.linkprop}>{this.props.linkprop}</a>
      </nav>
    );
  }
}

export default LinkComponent;
