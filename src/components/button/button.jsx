import styled, {css} from 'styled-components';

const ButtonStyle = styled.button`
  width: 210px;
  border: none;
  padding: 10px 15px;
  font-size: 17px;
  cursor: pointer;
  &:focus {
    outline: none;
  };

  ${props => props.primary && css`
    color: ${props => props.color || '#fff'};
    background-color: ${props => props.background || '#F44A1E'};
  `};
`;

function Button(props) {
  return (
    <ButtonStyle {...props} >
      {props.title}
    </ButtonStyle >
  );
}

export default Button;
