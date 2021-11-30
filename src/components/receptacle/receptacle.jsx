import styled from 'styled-components';
import Avatar from '../avatar/avatar';
import Flex from '../flex/flex';
import SideBox from '../sidebox/sidebox';
import About from '../about/about';

const ReceptacleStyle = styled.div`
  width: 100%;
`;

function Receptacle(props) {
  return (
    <ReceptacleStyle>
      <Flex direction="column-reverse">
        <SideBox>
          <About />
        </SideBox>
        <Avatar />
      </Flex>
    </ReceptacleStyle>
  );
}

export default Receptacle;
