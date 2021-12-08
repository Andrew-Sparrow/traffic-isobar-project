import styled from 'styled-components';
import PropTypes from 'prop-types';


const FlexStyle = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${({margin}) => margin || '0'};
`;

function Flex(props) {
  return (
    <FlexStyle {...props}/>
  );
}

Flex.propTypes = {
  direction: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  margin: PropTypes.string
};

export default Flex;
