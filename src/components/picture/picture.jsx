import styled from 'styled-components';

const PictureStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #1a2730;
  }
`;

function Picture(props) {
  const {imagePath} = props;

  return (
    <PictureStyle alt="cat" width="258" height="258" src={imagePath} />
  );
}

export default Picture;
