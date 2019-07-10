import React from 'react';
// import PropTypes from 'prop-types';

// import { Layout } from 'antd';
// const { Header, Sider, Content, Footer } = Layout;
// import EditScreenConnected from '../EditScreenConnected';

class EditScreenView extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Editing Objects 2</h1>
        <div>
          <div>Left Panel: Tree</div>
          <div>
            <div>Right Panel: Table</div>
            <div>Right Panel: Controls</div>
          </div>
        </div>
      </div>
    );

    // return (
    //   <Layout style={{ height: '100vh' }}>
    //     <Header style={{ backgroundColor: 'white' }}>Editing Objects</Header>
    //     <Layout>
    //       <Sider>Left Panel: Tree</Sider>
    //       <Layout>
    //         <Content>Right Panel: Table</Content>
    //         <Footer>Right Panel: Controls</Footer>
    //       </Layout>
    //     </Layout>
    //   </Layout>
    // );
  }
}
// EditScreenView.propTypes = {
//   // id: PropTypes.string.isRequired,
//   onSelectNodes: PropTypes.func.isRequired,
//   onSave: PropTypes.func.isRequired,
//   onCancel: PropTypes.func.isRequired,
// };

export default EditScreenView;
