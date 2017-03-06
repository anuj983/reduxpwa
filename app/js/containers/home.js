import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from '../components/TestComponent';
console.log("hello world!!!!");

const element = "<div>react element></div>";

function initApp() {
  ReactDOM.render(
    (
      <div className="home">
        <TestComponent testprop="abc"/>
      </div>
    ),
    document.getElementById('app')
  );
}

initApp();
