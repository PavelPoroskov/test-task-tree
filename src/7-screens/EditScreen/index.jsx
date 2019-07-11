import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import EditScreenConnected from './EditScreenConnected';

class EditScreen extends React.PureComponent {
  onClose = () => {
    const { history } = this.props;
    history.push({
      pathname: '/',
    });
  };

  render() {
    // console.log('EditScreen');
    // console.log(this.props);
    const { location: { state: { id } } } = this.props;
    if (!id) {
      return <Redirect to="/" />;
    }
    // console.log(id);
    return <EditScreenConnected id={id} onClose={this.onClose} />;
  }
}
EditScreen.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default EditScreen;
