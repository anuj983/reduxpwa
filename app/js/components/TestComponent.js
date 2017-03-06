import React from 'react';

class TestComponent extends React.Component {
  // getInitialState() {
  //   //this.state =
  // },
  constructor(props) {
    super(props);//calling this makes this.props = props else this.props = undefined
    console.log(this.props);
  }
  componentWillMount() {
    console.log("component Will mount - before render");
  }
  componentDidMount() {
    console.log("component did mount - after render");
  }
  componentWillUnmount() {
    console.log("component did Unmount");
  }
  render() {
    console.log("rendering");
    return <div>Hello world - component text {this.props.testprop}</div>;
  }
}

export default TestComponent;
