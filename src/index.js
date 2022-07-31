import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import { BrowserRouter } from 'react-router-dom';

import App from 'App';

import './stylesheet/common.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/Wallet-finance-app/">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
