import React from 'react';
import PropTypes from 'prop-types';

import EditingPropertiesConnected from './EditingPropertiesConnected';

class EditScreen extends React.PureComponent {
  onClose = () => {
    const { history } = this.props;
    history.push({
      pathname: '/',
    });
  };

  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        <h1>Editing Properties</h1>
        <EditingPropertiesConnected id={id} onClose={this.onClose} />
      </div>
    );
  }
}
EditScreen.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default EditScreen;
