import styled from 'styled-components';

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

export default Flex;
