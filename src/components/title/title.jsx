import styled from 'styled-components';
import PropTypes from 'prop-types';


const TitleStyle = styled.h1`
  position: relative;
  width: 100%;
  font-weight: 700;
  font-size: 35px;
  line-height: 70px;
  text-transform: uppercase;
  color: #F44A1E;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  padding-bottom: 50px;

  @media ${ props => props.theme.media.tablet } {
    font-size: 40px;
    max-width: 300px;

    &:before {
      left: -30px;
    }

    &:after {
      right: -30px;
    }
  }

  @media ${ props => props.theme.media.desktop } {
    font-size: 60px;

    &:before,
    &:after {
      width: 156px;
      content: '';
      position: absolute;
      top: 80px;
      border: 2px solid #F44A1E;
      background-color: #F44A1E;
      transform: rotate(-180deg);
    }

    &:before {
      left: -190px;
    }

    &:after {
      right: -190px;
    }
  }
`;

function Title({title}) {
  return (
    <TitleStyle >
      {title}
    </TitleStyle>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
