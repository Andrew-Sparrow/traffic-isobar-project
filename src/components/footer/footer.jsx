import styled from 'styled-components';

const FooterStyle = styled.div`
  width: 290px;
`;

function Footer({children}) {
  return (
    <FooterStyle>
      {children}
    </FooterStyle>
  );
}

export default Footer;
