import styled from 'styled-components';
import Topic from '../topic/topic';
import Button from '../button/button';

const SideBoxStyle = styled.div`
  padding-top: 30px;
  width: 
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
