import styled from 'styled-components';
import Topic from '../topic/topic';
import Button from '../button/button';

const SideBoxStyle = styled.article`
  padding-top: 30px;
  width: 100%;

  @media ${props => props.theme.media.desktop } {
    text-align: left;
    padding-top: 0;
  }
`;

function SideBox(props) {
  return (
    <SideBoxStyle {...props}>
      <Topic text='печёрских андрей'/>
      {props.children}
      <Button title="Смотреть работу"/>
    </SideBoxStyle>
  );
}

export default SideBox;
