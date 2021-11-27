import styled from 'styled-components';
import {tabNames} from '../../const';
import {Link} from 'react-router-dom';

const TabsStyle = styled.ul`
  width: 180px;
  list-style: none;
`;

function handleTabClick() {

};

function Tabs() {
  return (
    <TabsStyle>
        {Object.values(tabNames).map((tabName) => (
          <li>
            <Link
              to="#"
              data-group={tabName}
              key={tabName}
              onClick={handleTabClick}
            >
              {tabName}
            </Link>
          </li>
        ))}
      </TabsStyle>
  );
}

      export default Tabs;