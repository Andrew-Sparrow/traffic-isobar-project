import styled from 'styled-components';

const PictureStyle = styled.div`
  width: 262px;
  
  .picture__image{
    display: block;
    height: 213px;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    padding-top: 44px;
    padding-bottom: 44px;
    background-color: #1a2730;
    background-image: url("img/cat.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid #F44A1E;
    box-shadow: 0px 0px 58px rgba(244, 74, 30, 0.25);

    @media ${ props => props.theme.media.tablet } {
        width: 262px;
        height: 262px;
      }

    @media ${ props => props.theme.media.desktop } {
        width: 258px;
        max-width: 258px;
        height: 258px;
        margin-left: 0;
        margin-right: 0;
      }
  }
`;

function Picture(props) {
  return (
    <PictureStyle {...props}>
      <img className="picture__image" alt="cat" />
    </PictureStyle>
  );
}

export default Picture;
