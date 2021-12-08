import styled from 'styled-components';
import PropTypes from 'prop-types';


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

function Topic({text}) {
  return (
    <TopicStyle >
      {text}
    </TopicStyle>
  );
}

Topic.propTypes = {
  text: PropTypes.string.isRequired
};

export default Topic;
