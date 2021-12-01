import styled from 'styled-components';

const AvatarStyle = styled.div`
  max-width: 300px;

  .avatar__image{
    border-radius: 50%;
    object-fit: cover;
  }
`;

function Avatar(props) {
  return (
    <AvatarStyle {...props}>
      <img className="avatar__image" src="img/avatar.jpeg" width={250} height={250} alt="avatar" />
    </AvatarStyle>
  );
}

export default Avatar;
