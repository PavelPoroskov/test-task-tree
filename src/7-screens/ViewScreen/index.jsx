import React from 'react';
import PropTypes from 'prop-types';

import ViewScreenConnected from './ViewScreenConnected';

class ViewScreen extends React.PureComponent {
  onEditObject = () => {
  // onEditObject = (id) => {
    // if (!id) {
    //   return;
    // }
    const { history } = this.props;
    history.push({
      // pathname: `/edit/${id}`,
      pathname: '/edit',
    });
  };

  render() {
    return <ViewScreenConnected onEditObject={this.onEditObject} />;
  }
}
ViewScreen.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ViewScreen;
