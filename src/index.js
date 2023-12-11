import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import ContextShares from './context/ContextShares';
import TokenAuth from './context/TokenAuth';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextShares>
      <TokenAuth>
        <BrowserRouter>  
        <App />
        </BrowserRouter>
      </TokenAuth>
    </ContextShares>
  </React.StrictMode>
);

