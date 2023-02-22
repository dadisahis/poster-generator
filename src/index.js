import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PosterContextProvider } from './context/posterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PosterContextProvider>
      <App />
    </PosterContextProvider>
  </React.StrictMode>
);
