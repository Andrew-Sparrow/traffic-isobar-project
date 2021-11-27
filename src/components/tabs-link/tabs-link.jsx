import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const TabsLinkStyle = styled.li`
  font-size: 20px;
  line-height: 23px;
`;

function TabsLink(props) {
  const {tabName, handleTabClick, navLinkStyle} = props;

  return (
    <TabsLinkStyle>
      <NavLink
        to="#"
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
