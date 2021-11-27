import styled from 'styled-components';

const ContainerStyle = styled.div`
  width: 290px;
`;

function Container({children}) {
  return (
    <ContainerStyle>
      {children}
    </ContainerStyle>
  );
}

export default Container;
