import { connect } from 'react-redux';

import {
  updateObjects,
} from '../../8-store/objectsById/actions';

import EditingProperties from '../../9-components/EditingProperties';

function mapStateToProps(state) {
  return {
    data: state.list,
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSave: (data) => {
      dispatch(updateObjects(data));
      ownProps.onClose();
    },
    onCancel: () => {
      ownProps.onClose();
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditingProperties);
