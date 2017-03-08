import React from 'react';
import LinkComponent from './LinkComponent';
import AjaxComponent from './AjaxComponent';

class HomeComponent extends React.Component {
  // getInitialState() {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>Home</div>
        <LinkComponent linkprop="HomeLink"/>
        <AjaxComponent/>
      </div>
    );
  }
}

export default HomeComponent;
