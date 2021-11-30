import styled from 'styled-components';
import Container from '../container/container';


const FooterStyle = styled.div`
  background-color: ${props => props.color || props.theme.colors.secondary};
  min-height: 80px;
  line-height: 80px;
`;

function Footer() {
  return (
    <FooterStyle>
      <Container>
        Copyright © 2021
      </Container>
    </FooterStyle>
  );
}

export default Footer;
