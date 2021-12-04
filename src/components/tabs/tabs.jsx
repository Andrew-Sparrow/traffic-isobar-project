import styled from 'styled-components';
import {tabNames, AppRoute} from '../../const';
import TabsLink from '../tabs-link/tabs-link';

const TabsStyle = styled.menu`
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
  transform: ${ ({isOpen}) => isOpen ? 'translateX(0)' : 'translateX(100%)' };
  transition: transform 0.3s ease-in-out;

  @media ${ props => props.theme.media.desktop } {
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
      <TabsLink
        to={AppRoute.MAIN}
        tabName={tabNames.MAIN}
        // handleTabClick={handleTabClick}
        end
      >
        {tabNames.MAIN}
      </TabsLink>
      <TabsLink
        to={AppRoute.EXAMPLE}
        tabName={tabNames.EXAMPLE}
        // handleTabClick={handleTabClick}
        end
      >
        {tabNames.EXAMPLE}
      </TabsLink>
    </TabsStyle>
  );
}

export default Tabs;
