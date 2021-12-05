import styled from 'styled-components';
import withLayout from '../hocs/with-layout';
import Title from '../title/title';
import {PageTitle} from '../../const';
import Container from '../container/container';
import Section from '../section/section';
import Picture from '../picture/picture';

const ExampleStyle = styled.main`
  min-height: calc(100vh - 80px);
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

//   async function loadNextImage() {
//   try {
//     axios.defaults.headers.common['x-api-key'] = "DEMO-API-KEY" // Replace this with your API Key

//     let response = await axios.get('https://api.thecatapi.com/v1/images/search', {params: {limit: 1, size: "full"}}) // Ask for 1 Image, at full resolution

//     this.image = response.data[0] // the response is an Array, so just use the first item as the Image

//     console.log("-- Image from TheCatAPI.com")
//     console.log("id:", this.image.id)
//     console.log("url:", this.image.url)

//   } catch (err) {
//     console.log(err)
//   }
// }

function loadNextImage() {
  console.log('click')
}

function Example() {
  return (
    <ExampleStyle>
      <Container>
        <Title title={PageTitle.EXAMPLE} />
        <Section
          topic="Картинка с котом"
          title="Загрузить другую"
          onClickHandler={loadNextImage}
        >
          <Picture />
        </Section>
      </Container>
    </ExampleStyle>
  );
}

const withLayoutExample = withLayout(Example);
export default withLayoutExample;
