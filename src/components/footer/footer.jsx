import styled from 'styled-components';
import Container from '../container/container';


const FooterStyle = styled.footer`
  min-height: 100px;
  background-color: ${props => props.color || props.theme.colors.secondary};
  min-height: 80px;
  line-height: 80px;

  @media ${props => props.theme.media.phone} {
    width: 100%;
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <Container>
        Copyright © {new Date().getFullYear()}
      </Container>
    </FooterStyle>
  );
}

export default Footer;
