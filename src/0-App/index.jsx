import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import store from '../8-store';

import ViewScreen from '../7-screens/ViewScreen';
import EditScreen from '../7-screens/EditScreen';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={ViewScreen} />
          {/* }
          <Route exact path="/edit/:id" component={EditScreen} />
          { */}
          <Route exact path="/edit" component={EditScreen} />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
