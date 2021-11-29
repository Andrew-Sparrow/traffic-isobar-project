import styled from 'styled-components';
import Avatar from '../avatar/avatar';
import Flex from '../flex/flex';
import SideBox from '../sidebox/sidebox';

const ReceptacleStyle = styled.div`
  width: 100%;
`;

function Receptacle(props) {
  return (
    <ReceptacleStyle>
      <Flex>
        <SideBox>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
          </p>
        </SideBox>
        <Avatar />
      </Flex>
    </ReceptacleStyle>
  );
}

export default Receptacle;
