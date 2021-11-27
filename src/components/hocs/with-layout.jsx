import Layout from '../layout/layout';

function withLayout(Component, className) {
   return function wrapper (props) {
    return (
      <Layout className={className}>
        <Component  />
      </Layout>
    );
  };
};

withLayout.displayName = 'withLayout';

export default withLayout;
