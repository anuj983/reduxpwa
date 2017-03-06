import React from 'react';

class TestComponent extends React.Component {
  // getInitialState() {
  //   //this.state =
  // },
  constructor(props) {
    super(props);//calling this makes this.props = props else this.props = undefined
    console.log(this.props);
  }
  render() {
    return <div>Hello world - component text {this.props.testprop}</div>;
  }
}

export default TestComponent;
