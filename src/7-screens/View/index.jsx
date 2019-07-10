import React from 'react';
import PropTypes from 'prop-types';

import TableConnected from './TableConnected';

class ViewScreen extends React.PureComponent {
  onEditRow = (id) => {
    if (!id) {
      return;
    }
    const { history } = this.props;
    history.push({
      pathname: `/edit/${id}`,
    });
  };

  render() {
    return (
      <div>
        <h1>Property List</h1>
        <TableConnected onEditRow={this.onEditRow} />
      </div>
    );
  }
}
ViewScreen.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ViewScreen;
