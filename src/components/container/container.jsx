import styled from 'styled-components';

const ContainerStyle = styled.div`
  width: 290px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;

  @media ${props => props.theme.media.tablet} {
    min-width: 281px;
    max-width: 728px;
  }

  @media ${props => props.theme.media.desktop} {
    width: 1180px;
  }
`;

function Container({children}) {
  return (
    <ContainerStyle>
      {children}
    </ContainerStyle>
  );
}

export default Container;
