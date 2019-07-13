import { createSelector } from 'reselect';

import { sortBy } from '../10-api';

const objectsByIdInnerSelector = state => state.objectsById;
// only items/leaves, NoGroups
// remove propery "children", parentId, group
const objectsByIdSelector = createSelector(
  objectsByIdInnerSelector,
  (objectsById) => {
    const list = Object.keys(objectsById)
      .filter(key => !objectsById[key].group)
      .map((key) => {
        const {
          children, parentId, group, ...rest
        } = objectsById[key];
        return rest;
      });

    return list.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
  },
);

const objectsListSelector = createSelector(
  objectsByIdSelector,
  (objectsById) => {
    const list = Object.keys(objectsById).map(key => objectsById[key]);
    list.sort(sortBy('name'));
    return list;
  },
);

function getAllChildren(arIds, objectsById) {
  if (!arIds) {
    return [];
  }
  if (Array.isArray(arIds) && arIds.length === 0) {
    return [];
  }

  const listChildren = arIds.map(id => objectsById[id]);
  listChildren.sort(sortBy('name'));

  // console.log('getAllChildren');
  // console.log(arIds);
  for (let i = 0; i < listChildren.length; i += 1) {
    const obj = listChildren[i];
    // { id: 1, name: "Name 1", children: [2,3] }
    // =>
    // { id: 1, name: "Name 1", children: [
    //  { id: 2, name: "Name 2", children: [] }
    //  { id: 3, name: "Name 3", children: [] }
    // ]}
    obj.children = getAllChildren(obj.children, objectsById);
  }

  // console.log('getAllChildren/return');
  // console.log(listChildren);
  return listChildren;
}

const objectsByIdForTreeSelector = createSelector(
  objectsByIdInnerSelector,
  (objectsById) => {
    const list = Object.keys(objectsById)
      .map((key) => {
        const { id, name, children } = objectsById[key];
        return { id, name, children };
      });

    return list.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
  },
);

const objectsTreeSelector = createSelector(
  objectsByIdInnerSelector,
  objectsByIdForTreeSelector,
  (objectsByIdInner, objectsById) => {
    const arRootIds = Object.keys(objectsByIdInner)
      .filter(key => !objectsByIdInner[key].parentId)
      .map(key => parseInt(key, 10));

    // console.log('objectsTreeSelector/ return');
    // console.log(arRootIds);
    return getAllChildren(arRootIds, objectsById);
  },
);

export {
  objectsByIdSelector,
  objectsListSelector,
  objectsTreeSelector,
};
