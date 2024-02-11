import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/home/App';
import reportWebVitals from './reportWebVitals';
import { Global } from '@emotion/react';
import { globalStyles, StyledApp } from './styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <StyledApp>
      <App />
    </StyledApp>
  </React.StrictMode>
);

reportWebVitals();