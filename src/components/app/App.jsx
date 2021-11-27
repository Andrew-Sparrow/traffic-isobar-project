import {Fragment} from 'react';
import Main from '../main/main';
import {createGlobalStyle} from 'styled-components';

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
      <Main />
    </Fragment>
  );
}

export default App;
