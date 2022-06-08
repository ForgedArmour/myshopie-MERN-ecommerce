import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import EcomStates from './context/EcomStates';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EcomStates>
      <App /> 
    </EcomStates>      
  </React.StrictMode>
);
