import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './js/App';
import {
  HashRouter as Router
} from 'react-router-dom';
import { MetaMaskProvider } from '@metamask/sdk-react';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <Router>
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "Block Vault",
          url: window.location.href,
        }
      }}
    >
      <App/>
    </MetaMaskProvider>
  </Router>
);
