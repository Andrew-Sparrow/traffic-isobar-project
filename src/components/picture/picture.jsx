import styled from 'styled-components';

const PictureStyle = styled.div`
  .picture__image{
    display: block;
    width: 100%;
    max-width: 262px;
    height: 213px;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    padding-top: 44px;
    padding-bottom: 44px;

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
      <img className="picture__image" src="img/avatar.jpeg" alt="cat" />
    </PictureStyle>
  );
}

export default Picture;