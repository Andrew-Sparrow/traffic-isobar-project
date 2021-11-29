import styled from 'styled-components';


const TitleStyle = styled.div`
  font-weight: 700;
  font-size: 35px;
  line-height: 70px;
  text-transform: uppercase;
  color: #F44A1E;

  @media ${props => props.theme.media.tablet } {
    font-size: 40px;
  }

  @media ${ props => props.theme.media.desktop} {
    font-size: 60px;
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
