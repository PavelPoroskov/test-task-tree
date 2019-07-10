import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

function CellButton({ id, name, onClick }) {
  // return (
  //   <button type="button" data-id={id} onClick={onClick}>{name}</button>
  // );
  return (
    <Button data-id={id} onClick={onClick}>{name}</Button>
  );
}
CellButton.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CellButton;
