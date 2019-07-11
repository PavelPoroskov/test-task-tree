import { IMPORT_OBJECTS, UPDATE_OBJECTS } from './actions';

function getObjectByIdWithChildrenIds(list) {
  const childrenByParentId = {};
  for (let i = 0; i < list.length; i += 1) {
    const obj = list[i];
    const { parentId } = obj;
    if (parentId) {
      if (parentId in childrenByParentId) {
        childrenByParentId[parentId].push(obj.id);
      } else {
        childrenByParentId[parentId] = [obj.id];
      }
    }
  }

  const objectsById = {};
  for (let i = 0; i < list.length; i += 1) {
    const item = list[i];
    item.children = childrenByParentId[item.id];
    objectsById[item.id] = item;
  }

  return objectsById;
}

const initialData = {};

function reducer(state = initialData, action) {
  switch (action.type) {
    case IMPORT_OBJECTS: {
      const { list } = action.payload;
      return getObjectByIdWithChildrenIds(list);
    }
    case UPDATE_OBJECTS: {
      const { list } = action.payload;
      const updatedObjById = list.reduce((acc, el) => {
        acc[el.id] = el;
        return acc;
      }, {});
      return {
        ...state,
        ...updatedObjById,
      };
    }
    default:
      return state;
  }
}

export default reducer;
