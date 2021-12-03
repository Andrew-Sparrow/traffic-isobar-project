import styled from 'styled-components';
import withLayout from '../hocs/with-layout';
import Title from '../title/title';
import {PageTitle} from '../../const';
import Container from '../container/container';
import Receptacle from '../receptacle/receptacle';


const MainStyle = styled.div`
  min-height: 100vh;
  background: #2b2a2a;
  padding-top: 100px;
  padding-bottom: 100px;
  box-sizing: border-box;

  @media ${props => props.theme.media.phone} {
    width: 100%;
  }
`;

function Main() {
  return (
    <MainStyle>
      <Container>
        <Title title={PageTitle.MAIN} />
        <Receptacle />
      </Container>
    </MainStyle>
  );
}

const withLayoutMain = withLayout(Main);
export default withLayoutMain;
