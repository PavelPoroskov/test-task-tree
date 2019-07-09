import { connect } from 'react-redux';

import TableView from '../../9-components/Table';

// export default TableView;

function mapStateToProps(state) {
  return {
    data: state.list,
  };
}

export default connect(mapStateToProps)(TableView);
