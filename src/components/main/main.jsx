import styled from 'styled-components';
import withLayout from '../hocs/with-layout';
import Title from '../title/title';
import {PageTitle} from '../../const';
import Container from '../container/container';
import Receptacle from '../receptacle/receptacle';


const MainStyle = styled.main`
  min-height: 100vh;
  background: #111111;
  padding-top: 100px;
  padding-bottom: 100px;
  box-sizing: border-box;

  @media ${props => props.theme.media.phone} {
    width: 100%;
  }

  @media ${props => props.theme.media.desktop} {
    min-width: 1000px;
  }
`;

function Main() {
  return (
    <MainStyle>
      <Container>
        <Title title={PageTitle.MAIN} />
        <Receptacle topic='Печёрских Андрей' title="Смотреть работу"/>
      </Container>
    </MainStyle>
  );
}

const withLayoutMain = withLayout(Main);
export default withLayoutMain;
