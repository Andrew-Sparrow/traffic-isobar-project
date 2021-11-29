import styled from 'styled-components';
import Topic from '../topic/topic';
import Button from '../button/button';

const SideBoxStyle = styled.div`

`;

function SideBox(props) {
  return (
    <SideBoxStyle {...props}>
      <Topic text='печёрских андрей'/>
      {props.children}
      <Button/>
    </SideBoxStyle>
  );
}

export default SideBox;
