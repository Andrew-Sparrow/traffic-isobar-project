import {ButtonStyle} from "../button/button";
import PropTypes from 'prop-types';


function ChangeCatButton(props) {
  return (
    <ButtonStyle onClick={props.onClickHandler}>
      Загрузить другую
    </ButtonStyle>
  );
}

ChangeCatButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired
};

export default ChangeCatButton;
