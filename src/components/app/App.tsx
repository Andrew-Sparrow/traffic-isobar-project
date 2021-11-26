import {Fragment} from 'react';
import Main from '../main/main';
import styled, {createGlobalStyle} from 'styled-components';

const AppStyle = styled.div`
  background: #111111;
  min-height: 1vh;
`;

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    color: #ffffff;
  }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <AppStyle>
        <Main />
      </AppStyle>
    </Fragment>
  );
}

export default App;
