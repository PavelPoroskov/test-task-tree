import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import TableView from '../../9-components/Table';

const objectsByIdSelector = state => state.objectsById;

const objectsListSelector = createSelector(
  objectsByIdSelector,
  (objectsById) => {
    const list = Object.keys(objectsById).map(key => objectsById[key]);
    list.sort((o1, o2) => o1.id - o2.id);
    return list;
  },
);

function mapStateToProps(state) {
  return {
    objectsList: objectsListSelector(state),
  };
}

export default connect(mapStateToProps)(TableView);
