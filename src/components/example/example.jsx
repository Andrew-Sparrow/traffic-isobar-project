import styled from 'styled-components';
import withLayout from '../hocs/with-layout';
import Title from '../title/title';
import {PageTitle} from '../../const';
import Container from '../container/container';
import SideBox from '../sidebox/sidebox';
import Picture from '../picture/picture';

const ExampleStyle = styled.main`
  min-height: 100vh;
  background: #111111;
  padding-top: 100px;
  padding-bottom: 100px;
  box-sizing: border-box;

  @media ${ props => props.theme.media.phone } {
    width: 100%;
  }

  @media ${ props => props.theme.media.desktop } {
    min-width: 1000px;
  }
`;

function Example() {
  return (
    <ExampleStyle>
      <Container>
        <Title title={PageTitle.EXAMPLE} />
        <SideBox topic="Картинка с котом" title="Загрузить другую">
          <Picture/>
        </SideBox>
      </Container>
    </ExampleStyle>
  );
}

const withLayoutExample = withLayout(Example);
export default withLayoutExample;
