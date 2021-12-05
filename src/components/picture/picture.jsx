import styled from 'styled-components';

const PictureStyle = styled.img`
  width: 258px;
  display: block;
  height: 258px;
  margin-right: auto;
  object-fit: cover;
  margin-top: 44px;
  margin-bottom: 44px;
  background-color: #1a2730;
  border: 1px solid #F44A1E;
  box-shadow: 0px 0px 58px rgba(244, 74, 30, 0.25);
  }
`;

function Picture(props) {
  return (
    <PictureStyle alt="cat" width="258" height="258" src={props.path}>
    </PictureStyle>
  );
}

export default Picture;
