import styled from 'styled-components';
import Picture from '../picture/picture';
import ClipLoader from "react-spinners/PulseLoader";
import {css} from "@emotion/react";

const PictureContainerStyle = styled.div`
    width: 258px;
    display: block;
    height: 258px;
    margin-right: auto;
    margin-top: 44px;
    margin-bottom: 44px;
    border: 1px solid #F44A1E;
    box-shadow: 0px 0px 58px rgba(244, 74, 30, 0.25);
  }
`;

const override = css`
  display: block;
  line-height: 258px;
  text-align: center;
  border-color: red;
`;

function PictureContainer(props) {
  const {
    isLoading,
    imagePath
  } = props;

  return (
    <PictureContainerStyle>
      {isLoading ?
        <ClipLoader
          loading={isLoading}
          css={override}
          size={28}
          color={'#F44A1E'}
        /> :
      <Picture imagePath={imagePath} />
      }
    </PictureContainerStyle>
  );
}

export default PictureContainer;
