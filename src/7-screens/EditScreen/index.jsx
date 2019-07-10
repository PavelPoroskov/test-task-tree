import React from 'react';
import PropTypes from 'prop-types';

import EditScreenConnected from './EditScreenConnected';

class EditScreen extends React.PureComponent {
  onClose = () => {
    const { history } = this.props;
    history.push({
      pathname: '/',
    });
  };

  render() {
    // const { match: { params: { id } } } = this.props;
    // return <EditScreenConnected id={id} onClose={this.onClose} />;
    return <EditScreenConnected onClose={this.onClose} />;
  }
}
EditScreen.propTypes = {
  // match: PropTypes.shape({
  //   params: PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //   }).isRequired,
  // }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default EditScreen;
