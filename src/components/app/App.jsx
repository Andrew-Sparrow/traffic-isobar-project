import {Fragment} from 'react';
import Main from '../main/main';
import {createGlobalStyle} from 'styled-components';
import {Routes, Route, HashRouter as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {AppRoute} from '../../const';
import Error from '../not-found/not-found';


const GlobalStyle = createGlobalStyle`
  * {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    color: #ffffff;
  }
`;

function App() {
  // const isDataLoaded = useSelector(getIsDataLoaded);

  // if (!isDataLoaded) {
  //   return (
  //     <LoadingScreen />
  //   );
  // }

  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.MAIN} element={<Main />} />
          <Route element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
