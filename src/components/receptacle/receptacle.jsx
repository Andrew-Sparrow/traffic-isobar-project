import styled from 'styled-components';
import Avatar from '../avatar/avatar';
import SideBox from '../sidebox/sidebox';
import About from '../about/about';

const ReceptacleStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: 'stretch';
  justify-content:'stretch';
  margin: 0;

  @media ${props => props.theme.media.phone} {
    flex-direction: column-reverse;
  }

  @media ${props => props.theme.media.tablet} {
    flex-direction: column-reverse;
  }

  @media ${props => props.theme.media.desktop} {
    flex-direction: row;
  }
`;

function Receptacle() {
  return (
    <ReceptacleStyle>
      <SideBox>
        <About />
      </SideBox>
      <Avatar />
    </ReceptacleStyle>
  );
}

export default Receptacle;
