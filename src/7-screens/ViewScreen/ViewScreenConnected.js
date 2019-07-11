import { connect } from 'react-redux';

// import { selectNodes } from '../../8-store/selectedNodes/actions';
import { objectsListSelector } from '../../8-store/selectors';

import ViewScreenView from '../../9-components/ViewScreenView';

function mapStateToProps(state) {
  return {
    objectsList: objectsListSelector(state),
  };
}
// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     onEditObject: (id) => {
//       if (!id) {
//         return;
//       }
//       dispatch(selectNodes([id]));
//       ownProps.onEditObject(id);
//     },
//   };
// }

export default connect(mapStateToProps)(ViewScreenView);
