import styled from 'styled-components';

const AvatarStyle = styled.div`
  width: 400px;
  border-radius: 50%;
`;

function Avatar(props) {
  return (
    <AvatarStyle {...props}>
      <img src="img/avatar.jpg" width={400} height={400} alt="avatar" />
    </AvatarStyle>
  );
}

export default Avatar;
