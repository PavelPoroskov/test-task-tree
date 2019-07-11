import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from 'antd';

function CellBoolean({ value }) {
  return (
    <Checkbox checked={value} disabled />
  );
}
CellBoolean.propTypes = {
  value: PropTypes.bool.isRequired,
};

export default CellBoolean;
