import withLayout from '../hocs/with-layout';
import styled from 'styled-components';
import Container from '../container/container';

const ErrorStyle = styled.main`
  min-height: 93vh;
  background: #111111;
  padding-top: 100px;
  padding-bottom: 100px;
  box-sizing: border-box;

  h1 {
    text-align: center;
  }

  h2 {
    text-align: center;
  }

  @media ${props => props.theme.media.phone } {
    width: 100%;
  }

  @media ${ props => props.theme.media.desktop} {
    min-width: 1000px;
  }
`;

function Error() {
  return (
    <ErrorStyle >
      <Container>
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </Container>
    </ErrorStyle>
  );
}

const withLayoutError = withLayout(Error);
export default withLayoutError;
