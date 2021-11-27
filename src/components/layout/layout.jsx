import Header from "../header/header";
import Footer from "../footer/footer";
import styled from 'styled-components';

const LayoutStyle = styled.div`
  width: 100%;
`;

function Layout(props) {
  const {children, className} = props;

  return (
    <LayoutStyle className={className}>
      <Header />
      {children}
      <Footer />
    </LayoutStyle>
  );
};

export default Layout;
