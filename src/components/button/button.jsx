import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: ${props => props.width || '210px'};
  border: none;
  padding: 10px 15px;
  box-sizing: border-box;
  font-size: 17px;
  cursor: pointer;
  color: #fff;
  background-color: #F44A1E;
`;

function Button(props) {
  return (
    <ButtonStyle {...props} >
      {props.title}
    </ButtonStyle >
  );
}

export default Button;
