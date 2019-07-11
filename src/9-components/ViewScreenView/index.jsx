import React from 'react';
import PropTypes from 'prop-types';

import Table from '../Table';

function ViewScreenView({ objectsList, onEditObject }) {
  // console.log('ViewScreenView');
  // console.log(objectsList);
  return (
    <div>
      <h1>Objects</h1>
      <Table objectsList={objectsList} onEditObject={onEditObject} />
    </div>
  );
}
ViewScreenView.propTypes = {
  objectsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEditObject: PropTypes.func.isRequired,
};

export default ViewScreenView;
