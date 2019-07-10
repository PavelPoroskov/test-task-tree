export const UPDATE_OBJECTS = 'UPDATE_OBJECTS';
export const IMPORT_OBJECTS = 'IMPORT_OBJECTS';

export const updateObjects = list => ({
  type: UPDATE_OBJECTS,
  payload: {
    list,
  },
});

export const importObjects = list => ({
  type: IMPORT_OBJECTS,
  payload: {
    list,
  },
});
