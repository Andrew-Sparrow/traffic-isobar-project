import Layout from '../layout/layout';

function withLayout(Component, className) {
   return function wrapper () {
    return (
      <Layout className={className}>
        <Component  />
      </Layout>
    );
  };
};

withLayout.displayName = 'withLayout';

export default withLayout;
