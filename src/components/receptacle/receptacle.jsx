import styled from 'styled-components';

const ReceptacleStyle = styled.div`
  flex-direction: ${props => props.direction || 'row'};
`;

function Receptacle(props) {
  return (
    <ReceptacleStyle {...props}>
      {props.children}
    </ReceptacleStyle>
  );
}

export default Receptacle;