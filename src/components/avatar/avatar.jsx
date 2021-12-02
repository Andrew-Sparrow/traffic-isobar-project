import styled from 'styled-components';

const AvatarStyle = styled.div`
  // width: 262px;
  // max-width: 262px;
  // max-height: 262px;

  .avatar__image{
    display: block;
    width: 100%;
    max-width: 262px;
    height: 262px;

    border-radius: 50%;
    object-fit: cover;
  }
`;

function Avatar(props) {
  return (
    <AvatarStyle {...props}>
      <img className="avatar__image" src="img/avatar.jpeg" width={400} height={250} alt="avatar" />
    </AvatarStyle>
  );
}

export default Avatar;
