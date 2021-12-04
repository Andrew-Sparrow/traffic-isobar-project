import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const TabsLinkStyle = styled.li`
  font-size: 20px;
  line-height: 23px;
  padding: 18px 10px;

  &:hover {
    color: #F44A1E;
  }
`;

const navLinkStyle = {
  fontSize: "20px",
  lineHeight: "23px",
  textDecoration: "none"
};

function TabsLink(props) {
  const {tabName, handleTabClick, to} = props;

  return (
    <TabsLinkStyle>
      <NavLink
        to={to}
        data-group={tabName}
        onClick={handleTabClick}
        style={navLinkStyle}
        end
      >
        {tabName}
      </NavLink>
    </TabsLinkStyle>
  );
}

export default TabsLink;
