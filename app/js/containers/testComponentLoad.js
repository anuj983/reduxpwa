import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from '../components/TestComponent';
import LinkComponent from '../components/LinkComponent';


console.log("hello world!!!!");

const element = "<div>react element></div>";

function initApp() {
  ReactDOM.render(
    (
      <div className="home">
        <TestComponent testprop="abc"/>
        <LinkComponent linkprop="page1"/>
        <LinkComponent linkprop="page2"/>
        <LinkComponent linkprop="page3"/>
      </div>
    ),
    document.getElementById('app')
  );
}

initApp();
