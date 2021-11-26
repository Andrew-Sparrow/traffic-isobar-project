import {FC, ReactChildren, ReactChild} from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
  width: 290px;
`;

interface ContainerProps {
  children: ReactChild | ReactChildren;
};

function Container({children}: ContainerProps) {
  return (
    <ContainerStyle>
      {children}
    </ContainerStyle>
  );
}

export default Container;
