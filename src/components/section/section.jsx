import {useState} from 'react';
import Topic from '../topic/topic';
import Picture from '../picture/picture';
import ChangeCatButton from '../change-cat-button/change-cat-button';
import {SideBoxStyle} from '../sidebox/sidebox';
import axios from 'axios';



function Section(props) {
  const [imagePath, setImagePath] = useState('https://cdn2.thecatapi.com/images/3bv.jpg');

  async function loadNextImage() {
    try {
      axios.defaults.headers.common['x-api-key'] = "DEMO-API-KEY" // Replace this with your API Key

      let response = await axios.get('https://api.thecatapi.com/v1/images/search', {params: {limit: 1, size: "full"}}) // Ask for 1 Image, at full resolution

      let image = response.data[0] // the response is an Array, so just use the first item as the Image

      setImagePath(image.url);

    } catch (err) {
    }
  }

  return (
    <SideBoxStyle >
      <Topic text='Картинка с котом' />
      <Picture path={imagePath} />
      <ChangeCatButton title="Смотреть работу" onClickHandler={loadNextImage}/>
    </SideBoxStyle>
  );
}

export default Section;
