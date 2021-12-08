import styled from 'styled-components';
import PropTypes from 'prop-types';

const PictureStyle = styled.div`
    width: 100%;
    height: 100%;
    background-color: #1a2730;
    background-image:url("data:image/svg+xml;utf8,
      <svg xmlns='http://www.w3.org/2000/svg' version='1.1'
          height='50px' width='120px'>
        <text x='0' y='28' fill='orange' font-size='40'>Wait ...</text>
      </svg>");
    background-repeat: no-repeat;
    background-position: center;

    img {
      object-fit: contain;
    }
  }
`;

function Picture(props) {
  const {imagePath} = props;

  return (
    <PictureStyle >
      <img alt="cat" width="258" height="258" src={imagePath}/>
    </PictureStyle>
  );
}

Picture.propTypes = {
  imagePath: PropTypes.string
};

export default Picture;
