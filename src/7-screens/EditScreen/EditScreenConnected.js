import { connect } from 'react-redux';

import { updateObjects } from '../../8-store/objectsById/actions';
import { objectsTreeSelector } from '../../8-store/selectors';

import EditScreenView from '../../9-components/EditScreenView';


function mapStateToProps(state) {
  return {
    objectsTree: objectsTreeSelector(state),
    // selectedObjects:
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

export default connect(mapStateToProps, mapDispatchToProps)(EditScreenView);
