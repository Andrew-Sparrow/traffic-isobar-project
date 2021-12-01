import styled from 'styled-components';
import Container from '../container/container';
import Flex from '../flex/flex';
import Burger from '../burger/burger';

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

 @media ${props => props.theme.media.desktop} {
    flex-direction: row;
  }
`;

function Header() {
  return (
    <HeaderStyle >
      <Container>
        <Flex justify='space-between'>
          <img className="header__img" src="img/logoMain.svg" width={200} height={31} alt="Логотип" />
          <Burger/>
        </Flex>
      </Container>
    </HeaderStyle>
  );
}

export default Header;
