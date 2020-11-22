import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainContainer from './components/maincontainer/MainContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <MainContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);