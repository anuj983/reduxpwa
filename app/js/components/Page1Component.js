import React from 'react';
import LinkComponent from './LinkComponent';

class Page1Component extends React.Component {
  // getInitialState() {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>Page1</div>
        <LinkComponent linkprop="page1Link"/>
      </div>
    );
  }
}

export default Page1Component;
