import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers';

import { importObjects } from './objectsById/actions';

const store = createStore(rootReducer, devToolsEnhancer());

async function fetchData() {
  try {
    const result = await fetch('test-data.json');
    const newData = await result.json();

    store.dispatch(importObjects(newData));
  } catch (err) {
    console.log(err);
  }
}

fetchData();

export default store;
