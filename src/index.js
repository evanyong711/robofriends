import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from './CardList'
import reportWebVitals from './reportWebVitals';
import 'tachyons'
// import { robots } from './robots'
// ^needs to be destructured as robots.js is export not export default
// ^needs to be commented out unless CardList requires an argument to be passed into the function
// ^in which case need to comment out line 3 of CardList.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Robofriends</h1>
    <CardList/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
