import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Person from './Person/Person';
import Vehicle from './Person/Vehicle';
import User from './User/User';
import Like from './User/Likes';
import Blog from './Blog/Blog';
import Button from './Blog/Button';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Person name = 'Peter'/>
    <Vehicle name = 'Benz' model = 'Maybach'/>
    <User name =  'Dean'/>
    <Like count = '5'/>
    <Blog likes = '10' comments = '10'>This is a technlogiy blog.</Blog>
    <Button />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
