import styled from 'styled-components';

const FlexStyle = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ;
  justify-content: ;
  margin: ;
`;

function Flex(props) {
  return (
    <FlexStyle {...props}/>
  );
}

export default Flex;
