import styled from 'styled-components';

const TopicStyle = styled.h2`
  font-weight: 700;
  line-height: 47px;
  font-family: Roboto;
  font-size: 40px;
  text-align: center;
  margin: 0;

  @media ${props => props.theme.media.desktop} {
    text-align: left;
  }
`;

function Topic(props) {
  return (
    <TopicStyle {...props}>
      {props.text}
    </TopicStyle>
  );
}

export default Topic;
