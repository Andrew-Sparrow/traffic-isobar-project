import styled from 'styled-components';
import {
  NavLink,
  useMatch,
  useResolvedPath
} from 'react-router-dom';
import PropTypes from 'prop-types';


const TabsLinkStyle = styled.li`
  font-size: 20px;
  line-height: 23px;
  padding: 18px 10px;

  .tab {
    padding-bottom: 5px;
    text-decoration: none;
  }

  .tab--active {
    border-bottom: 1px solid #F44A1E;
  }

  &:hover {
    color: #F44A1E;
  }
`;

const navLinkStyle = {
};

function TabsLink(props) {
  const {tabName, to} = props;
  let resolved = useResolvedPath(to);
  let match = useMatch({path: resolved.pathname, end: true});

  return (
    <TabsLinkStyle>
      <NavLink
        to={to}
        style={navLinkStyle}
        end
        className={`tab ${ match ? 'tab--active' : ''}`}
      >
        {tabName}
      </NavLink>
    </TabsLinkStyle>
  );
}

TabsLink.propTypes = {
  tabName: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default TabsLink;
