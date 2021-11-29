import styled from 'styled-components';


const TitleStyle = styled.div`
  position: relative;
  width: 265px;
  font-weight: 700;
  font-size: 35px;
  line-height: 70px;
  text-transform: uppercase;
  color: #F44A1E;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  @media ${props => props.theme.media.tablet } {
    font-size: 40px;

    &:before,
    &:after {
      width: 40px;
      content: '';
      position: absolute;
      top: 28px;
      border: 2px solid #F44A1E;
      transform: rotate(-180deg);
    }

    &:before {
      left: -30px;
    }

    &:after {
      right: -30px;
    }
  }

  @media ${ props => props.theme.media.desktop} {
    font-size: 60px;

    &:before,
    &:after {
      width: 156px;
    }

    &:before {
      left: -190px;
    }

    &:after {
      right: -190px;
    }
  }
`;

function Title({...props}) {
  return (
    <TitleStyle {...props}>
      {props.title}
    </TitleStyle>
  );
}

export default Title;
