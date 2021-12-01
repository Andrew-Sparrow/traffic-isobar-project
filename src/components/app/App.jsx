import Main from '../main/main';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {Routes, Route, HashRouter as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {AppRoute} from '../../const';
import Error from '../not-found/not-found';


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
    secondary: '#000000'
  },
  media: {
    phone: "(max-width: 320px)",
    // tablet: "(min-width: 321px) and (max-width: 768px)",
    tablet: "(max-width: 768px)",
    desktop: "(min-width: 769px)"
  }
};

function App() {
  // const isDataLoaded = useSelector(getIsDataLoaded);

  // if (!isDataLoaded) {
  //   return (
  //     <LoadingScreen />
  //   );
  // }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.MAIN} element={<Main />} />
          <Route element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
