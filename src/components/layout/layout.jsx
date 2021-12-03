import Header from "../header/header";
import Footer from "../footer/footer";

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

export default Layout;
