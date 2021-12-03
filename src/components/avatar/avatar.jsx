import styled from 'styled-components';

const AvatarStyle = styled.div`
  .avatar__image{
    display: block;
    width: 100%;
    max-width: 262px;
    height: 213px;
    margin-left: auto;
    margin-right: auto;

    border-radius: 50%;
    object-fit: cover;

    @media ${props => props.theme.media.tablet} {
        width: 262px;
        height: 262px;
      }

    @media ${props => props.theme.media.desktop} {
        width: 400px;
        height: 253px;
      }
  }
`;

function Avatar(props) {
  return (
    <AvatarStyle {...props}>
      <img className="avatar__image" src="img/avatar.jpeg" alt="avatar" />
    </AvatarStyle>
  );
}

export default Avatar;
