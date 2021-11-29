import styled from 'styled-components';
import withLayout from '../hocs/with-layout';
import Title from '../title/title';
import {PageTitle} from '../../const';

const MainStyle = styled.div`
  min-height: 100vh;
  background: #2b2a2a;
`;

function Main() {
  return (
    <MainStyle>
      <Title title={PageTitle.MAIN}/>
    </MainStyle>
  );
}

const withLayoutMain = withLayout(Main);
export default withLayoutMain;
