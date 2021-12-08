import Header from "../header/header";
import Footer from "../footer/footer";
import PropTypes from 'prop-types';


function Layout(props) {
  const {children} = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
};

export default Layout;
