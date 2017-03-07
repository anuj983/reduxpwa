import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import TestComponent from '../components/TestComponent';
import LinkComponent from '../components/LinkComponent';
import Page1Component from '../components/Page1Component';
import Page2Component from '../components/Page2Component';
import Page3Component from '../components/Page3Component';


console.log("hello world!!!!");

//const element = "<div>react element></div>";//not works
const element = () => <div>Page4 react element</div>;

function initApp() {
  ReactDOM.render(
    (
      <Router history={browserHistory}>
        <Route path="/" component={Page1Component}></Route>
        <Route path="/page2" component={Page2Component}></Route>
        <Route path="/page3" component={Page3Component}></Route>
        <Route path="/page4" component={element}></Route>
      </Router>
    ),
    document.getElementById('app')
  );
}

initApp();
