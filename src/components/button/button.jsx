import styled from 'styled-components';

export const ButtonStyle = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  width: ${props => props.width || '100%'};
  border: none;
  padding: 10px 15px;
  box-sizing: border-box;
  font-size: 17px;
  cursor: pointer;
  color: #fff;
  background-color: #F44A1E;
  text-transform: uppercase;

  &:hover {
    background-color: #d62c00;
  }

  @media ${props => props.theme.media.desktop} {
    width: 210px;
  }
`;

export function Button(props) {
  return (
    <ButtonStyle {...props} href="https://andrew-sparrow.github.io/ap-portfolio" target="_blank">
      {props.title}
    </ButtonStyle >
  );
}
