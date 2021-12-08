import styled from 'styled-components';
import Topic from '../topic/topic';
import {Button} from '../button/button';

export const SideBoxStyle = styled.article`
  padding-top: 30px;
  width: 100%;

  @media ${props => props.theme.media.desktop } {
    text-align: left;
    padding-top: 0;
  }
`;

export function SideBox(props) {
  return (
    <SideBoxStyle>
      <Topic text='Печёрских Андрей'/>
      {props.children}
      <Button title="Смотреть работу"/>
    </SideBoxStyle>
  );
}
