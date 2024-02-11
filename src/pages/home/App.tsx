import React from 'react';
import logo from './logo.svg';
import { StyledApp, AppLogo, AppHeader, AppLink } from './styles';

function App() {
  return (
    <StyledApp>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </StyledApp>
  );
}

export default App;