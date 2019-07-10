export const SELECT_NODES = 'SELECT_NODES';

export const selectNodes = nodes => ({
  type: SELECT_NODES,
  payload: {
    nodes,
  },
});
