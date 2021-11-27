import styled from 'styled-components';
import Container from '../container/container';
import Tabs from '../tabs/tabs';
import Flex from '../flex/flex';

const HeaderStyle = styled.div`
  width: 100%;
  background-color: #000000;
  border: 2px solid lightgreen;
  box-sizing : border-box;
  padding-top: 20px;
  padding-bottom: 20px;
`;

function Header() {
  return (
    <HeaderStyle>
      <Container>
        <img className="header__img" src="img/logoMain.svg" width={100} height={31} alt="Логотип" />
        {/* <Flex> */}
          <Tabs />
        {/* </Flex> */}
      </Container>
    </HeaderStyle>
  );
}

export default Header;
