import styled from 'styled-components';

const ContainerStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;

  @media ${props => props.theme.media.phone} {
    width: 260px;
  }

  @media ${props => props.theme.media.tablet} {
    max-width: 768px;
  }

  @media ${props => props.theme.media.desktop} {
    min-width: 749px;
    max-width: 1180px;
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
