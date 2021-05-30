import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


function AppTwo(){
  return(
    <h2>This is new App</h2>
  );
}

ReactDOM.render(
  <React.Fragment>
  <App/>
  <AppTwo />
  </React.Fragment>,
  document.getElementById('root')
);


