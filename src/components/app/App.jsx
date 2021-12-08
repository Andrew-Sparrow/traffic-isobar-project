import Main from '../main/main';
import Example from '../example/example';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {Routes, Route, HashRouter as BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Error from '../error/error';


const GlobalStyle = createGlobalStyle`
  * {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    color: #ffffff;
  }
`;

const theme = {
  colors: {
    primary: '#111111',
    secondary: '#000000',
    orange: '#F44A1E'
  },
  media: {
    phone: "(max-width: 320px)",
    tablet: "(min-width: 321px)",
    desktop: "(min-width: 769px)"
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.MAIN} element={<Main />} />
          <Route path={AppRoute.EXAMPLE} element={<Example />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
