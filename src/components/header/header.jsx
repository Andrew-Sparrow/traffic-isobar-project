import styled from 'styled-components';
import Container from '../container/container';

const HeaderStyle = styled.div`
  width: 100%;
  background-color: #000000;
  border: 2px solid lightgreen;
  box-sizing : border-box;
`;

function Header() {
  return (
    <HeaderStyle>
      <Container>
        <img className="header__img" src="img/logoMain.svg" width={200} height={31} alt="Логотип" />
      </Container>
    </HeaderStyle>
  );
}

export default Header;
