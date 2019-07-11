import { createSelector } from 'reselect';


function compareByKey(key) {
  return function compare(o1, o2) {
    if (o1[key] < o2[key]) {
      return -1;
    }
    if (o1[key] > o2[key]) {
      return 1;
    }
    return 0;
  };
}

const objectsByIdSelector = state => state.objectsById;

const objectsListSelector = createSelector(
  objectsByIdSelector,
  (objectsById) => {
    let list = Object.keys(objectsById).map(key => objectsById[key]);
    list = list.filter(el => !el.group);
    list.sort(compareByKey('name'));
    return list;
  },
);

export {
  objectsByIdSelector,
  objectsListSelector,
  // objectsTreeSelector,
};
