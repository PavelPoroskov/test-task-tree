import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from '../8-store';

import ViewScreen from '../7-screens/View';
import EditScreen from '../7-screens/Edit';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={ViewScreen} />
        <Route path="/edit" component={EditScreen} />
      </Router>
    </Provider>
  );
}

export default App;
