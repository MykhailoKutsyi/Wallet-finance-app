import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import './stylesheet/common.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/Wallet-finance-app/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
