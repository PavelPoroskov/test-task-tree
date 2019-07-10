import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

function CellName({ id, name, onClick }) {
  // return (
  //   <span data-id={id} onClick={onClick}>{name}</span>
  // );
  return (
    <Button type="link" data-id={id} onClick={onClick}>{name}</Button>
  );
}
CellName.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CellName;
