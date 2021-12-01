import styled from 'styled-components';
import {tabNames} from '../../const';
import TabsLink from '../tabs-link/tabs-link';

const TabsStyle = styled.ul`
  display: flex;
  width: 180px;
  list-style: none;
  padding-left: 0;
  box-sizing: border-box;
  justify-content: space-between;
  z-index: 10;
  position: fixed;
  flex-direction: column;
  background-color: #353434;
  top: 0;
  right: 0;
  margin: 0;
  padding-top: 60px;
  padding-left: 20px;
  transform: ${ ({isOpen}) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;

  @media ${props => props.theme.media.desktop} {
    position: initial;
    flex-direction: row;
    padding-top: 0;
    background-color: transparent;
    padding-left: 0;
    transform: initial;
  }
`;

function handleTabClick() {

};

function Tabs({isOpen}) {
  return (
    <TabsStyle isOpen={isOpen}>
      {Object.values(tabNames).map((tabName) => (
        <TabsLink
          to="#"
          key={tabName}
          tabName={tabName}
          handleTabClick={handleTabClick}
          end
        >
          {tabName}
        </TabsLink>
      ))}
    </TabsStyle>
  );
}

export default Tabs;