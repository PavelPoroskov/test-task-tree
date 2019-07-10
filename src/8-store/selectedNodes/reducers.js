import { SELECT_NODES } from './actions';

const initialData = [];

function reducer(state = initialData, action) {
  switch (action.type) {
    case SELECT_NODES: {
      const { nodes } = action.payload;
      return nodes;
    }
    default:
      return state;
  }
}

export default reducer;
