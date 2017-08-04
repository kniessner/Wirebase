import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Time = () => (
  <div>
    <h1>Hello, world!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
)
setInterval(Time, 1000);
export default Time;
