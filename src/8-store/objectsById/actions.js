export const UPDATE_OBJECTS = 'UPDATE_OBJECTS';

export const updateObjects = list => ({
  type: UPDATE_OBJECTS,
  payload: {
    list,
  },
});
