import styled from 'styled-components';
import {tabNames} from '../../const';
import TabsLink from '../tabs-link/tabs-link';

const TabsStyle = styled.ul`
  width: 180px;
  list-style: none;
  padding-left: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const activeStyle = {
  textDecoration: "underline",
  color: "red",
};

const NavLinkStyle = {
  fontSize: "20px",
  lineHeight: "23px",
  textDecoration: "none"
};

function handleTabClick() {

};

function Tabs() {
  return (
    <TabsStyle>
      {Object.values(tabNames).map((tabName) => (
        <TabsLink
          to="#"
          key={tabName}
          tabName={tabName}
          handleTabClick={handleTabClick}
          navLinkStyle={NavLinkStyle}
          end
        >
          {tabName}
        </TabsLink>
      ))}
    </TabsStyle>
  );
}

export default Tabs;