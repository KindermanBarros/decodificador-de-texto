import React from 'react';
import logo from '../../shared/assets/logo.svg';
import { StyledApp, AppLogo, AppHeader, AppLink } from './styles';
import { ChatContainer } from '../../shared/components/ChatContainer/ChatContainer'; 

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
        <ChatContainer>
          <h1>Chat Container</h1>
      </ChatContainer>
    </StyledApp>
  );
}

export default App;