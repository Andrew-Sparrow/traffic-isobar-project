import styled from 'styled-components';
import Container from '../container/container';
import Tabs from '../tabs/tabs';
import Flex from '../flex/flex';

const HeaderStyle = styled.div`
  width: 100%;
  background-color: ${props => props.color || props.theme.colors.secondary};
  box-sizing : border-box;
  padding-top: 20px;
  padding-bottom: 20px;

  @media ${props => props.theme.media.phone} {
    img {
      width: 100px;
    }
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <Container>
        <Flex>
          <img className="header__img" src="img/logoMain.svg" width={200} height={31} alt="Логотип" />
          <Tabs />
        </Flex>
      </Container>
    </HeaderStyle>
  );
}

export default Header;
