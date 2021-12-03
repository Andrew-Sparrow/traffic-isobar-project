import {useState} from 'react';
import styled from 'styled-components';
import Tabs from '../tabs/tabs';

const BurgerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50px;
  height: 50px;
  position: fixed;
  top: 11px;
  right: 20px;
  z-index: 20;

  &:hover {
    cursor: pointer;
  }

  @media ${ props => props.theme.media.desktop } {
    display: none;
  }

  div {
    width: 50px;
    height: 4px;
    background-color: #F44A1E;
    border-radius: 3px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${ ({open}) => open ? 'rotate(45deg)' : 'rotate(0)' };
    }

    &:nth-child(2) {
      transform: ${ ({open}) => open ? 'translateX(100%)' : 'translateX(0)' };
      opacity: ${ ({open}) => open ? 0 : 1 };
    }

    &:nth-child(3) {
      transform: ${ ({open}) => open ? 'rotate(-45deg)' : 'rotate(0)' };
    }
  }
`;

function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BurgerStyle open={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </BurgerStyle>
      <Tabs isOpen={isOpen} />
    </>
  )
}

export default Burger;
