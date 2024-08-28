import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SidebarButtonProvider } from './ButtonContext';
import {StoreProvider} from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <SidebarButtonProvider>
        <App />
      </SidebarButtonProvider>
    </StoreProvider>
  </React.StrictMode>
);
