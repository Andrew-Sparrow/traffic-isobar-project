import styled from 'styled-components';

const HeaderStyle = styled.div`
  width: 290px;
`;

function Header({children}) {
  return (
    <HeaderStyle>
      {children}
    </HeaderStyle>
  );
}

export default Header;
