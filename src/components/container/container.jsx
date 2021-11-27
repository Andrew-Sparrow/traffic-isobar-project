import styled from 'styled-components';

const ContainerStyle = styled.div`
  width: 290px;
  margin-left: auto;
  margin-right: auto;
`;

function Container({children}) {
  return (
    <ContainerStyle>
      {children}
    </ContainerStyle>
  );
}

export default Container;
