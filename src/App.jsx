import React from 'react';
import { GlobalStyle } from './style/GlobalStyle';

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        Wallet Finance App
      </div>
    </React.Fragment>
  );
}
