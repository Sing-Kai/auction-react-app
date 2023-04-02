import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';
import App from './App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const domain = process.env.REACT_APP_AUTH0_DOMAIN as string
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID as string

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Auth0Provider>
);