import {useState, useEffect} from 'react';
import Topic from '../topic/topic';
import PictureContainer from '../picture-container/picture-container';
import ChangeCatButton from '../change-cat-button/change-cat-button';
import {SideBoxStyle} from '../sidebox/sidebox';
import axios from 'axios';

let initialImagePath = 'https://cdn2.thecatapi.com/images/3bv.jpg';
const API_SOURCE = 'https://api.thecatapi.com/v1/images/search';

function Section(props) {
  const localStorageKey = 'imgPath';

  const [imagePath, setImagePath] = useState(initialImagePath);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(localStorageKey) !== initialImagePath && localStorage.getItem(localStorageKey) !== null) {
      setImagePath(localStorage.getItem(localStorageKey));
      return;
    }
    localStorage.setItem(localStorageKey, initialImagePath);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  async function loadNextImage() {
    try {
      setIsLoading(true);

      axios.defaults.headers.common['x-api-key'] = "DEMO-API-KEY" // Replace this with your API Key

      let response = await axios.get(API_SOURCE, {params: {limit: 1, size: "full"}}) // Ask for 1 Image, at full resolution

      let image = response.data[0] // the response is an Array, so just use the first item as the Image

      setImagePath(image.url);
      localStorage.setItem(localStorageKey, image.url);
      setIsLoading(false);
    } catch (err) {
    }
  }

  return (
    <SideBoxStyle {...props}>
      <Topic text='Картинка с котом' />
      {/* <Picture path={imagePath} isLoading={isLoading}/> */}
      <PictureContainer
        imagePath={imagePath}
        isLoading={isLoading}
      />
      <ChangeCatButton
        title="Смотреть работу"
        onClickHandler={loadNextImage}
      />
    </SideBoxStyle>
  );
}

export default Section;
