import styled from 'styled-components';
import withLayout from '../hocs/with-layout';

const MainStyle = styled.div`
  min-height: 100vh;
  background: darkgrey;
`;

function Main() {
  return (
    <MainStyle>
      app
    </MainStyle>
  );
}

const withLayoutMain = withLayout(Main);
export default withLayoutMain;
