import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import { BrowserRouter } from 'react-router-dom';

import App from 'App';

import './stylesheet/common.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
