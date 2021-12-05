import {ButtonStyle} from "../button/button";

function ChangeCatButton(props) {
  return (
    <ButtonStyle onClick={props.onClickHandler}>
      Загрузить другую
    </ButtonStyle>
  );
}

export default ChangeCatButton;
