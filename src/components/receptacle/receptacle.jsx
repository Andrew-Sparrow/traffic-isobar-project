import React from 'react';
import styled from 'styled-components';
import Avatar from '../avatar/avatar';
import About from '../about/about';
import SideBox from '../sidebox/sidebox';

const ReceptacleStyle = styled.section`
  width: 100%;
  display: flex;
  align-items: 'stretch';
  justify-content:'stretch';
  margin: 0;

  @media ${ props => props.theme.media.phone } {
    flex-direction: column-reverse;
  }

  @media ${ props => props.theme.media.tablet } {
    flex-direction: column-reverse;
  }

  @media ${ props => props.theme.media.desktop } {
    flex-direction: row;
    justify-content: space-between;
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
