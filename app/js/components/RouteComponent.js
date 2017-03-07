import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Page1Component from './Page1Component';
import Page2Component from './Page2Component';
import Page3Component from './Page3Component';

export default class RouteComponent extends React.Component {
  render() {
    //const { children } = this.props;
    console.log("page component router");
    return (
      <div className='RouteComponentClass'>
        <Router history={hashHistory}>
          <Route path="/page1" component={Page1Component}<Route/>
          <Route path="/page2" component={Page1Component}<Route/>
          <Route path="/page3" component={Page1Component}<Route/>
        </Router>
      </div>
    );
  }
}
