import React from 'react';
import LinkComponent from './LinkComponent';

class Page3Component extends React.Component {
  // getInitialState() {
  render() {
    return (
      <div>
        <div>Page3</div>
        <LinkComponent linkprop="page3Link"/>
      </div>
    );
  }
}

export default Page3Component;
