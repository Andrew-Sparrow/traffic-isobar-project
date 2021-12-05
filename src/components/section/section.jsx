import Topic from '../topic/topic';
import ChangeCatButton from '../change-cat-button/change-cat-button';
import {SideBoxStyle} from '../sidebox/sidebox';


function Section(props) {
  return (
    <SideBoxStyle >
      <Topic text='Картинка с котом' />
      {props.children}
      <ChangeCatButton title="Смотреть работу" onClickHandler={props.onClickHandler}/>
    </SideBoxStyle>
  );
}

export default Section;