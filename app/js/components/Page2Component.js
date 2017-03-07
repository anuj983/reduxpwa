import React from 'react';
import LinkComponent from './LinkComponent';

class Page2Component extends React.Component {
  // getInitialState() {
  render() {
    return (
      <div>
        <div>Page2</div>
        <LinkComponent linkprop="page2Link"/>
      </div>
    );
  }
}

export default Page2Component;
