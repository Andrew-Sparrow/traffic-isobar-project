import styled from 'styled-components';

const TopicStyle = styled.h2`
  font-weight: 700;
  line-height: 47px;
  text-align: left;
  font-family: Roboto;
  font-size: 40px;
  text-transform: capitalize;
  text-align: center;
  margin: 0;
`;

function Topic(props) {
  return (
    <TopicStyle {...props}>
      {props.text}
    </TopicStyle>
  );
}

export default Topic;
