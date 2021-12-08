import styled from 'styled-components';
import PropTypes from 'prop-types';


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
    max-width: 1220px;
  }
`;

function Container({children}) {
  return (
    <ContainerStyle>
      {children}
    </ContainerStyle>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
};

export default Container;
