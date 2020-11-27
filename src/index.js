import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {HashRouter, BrowserRouter} from 'react-router-dom';
import {HomePage} from './material-ui/Home';


ReactDOM.render(
  <BrowserRouter>
    <HomePage  />
  </BrowserRouter>,
  document.getElementById('toolbar_section')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
