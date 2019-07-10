import { combineReducers } from 'redux';
import objectsById from './objectsById/reducers';
import selectedNodes from './selectedNodes/reducers';

export default combineReducers({
  objectsById,
  selectedNodes,
});
