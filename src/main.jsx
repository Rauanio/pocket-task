import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { InputContextProvider } from './context/InputContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <InputContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </InputContextProvider>,
);
