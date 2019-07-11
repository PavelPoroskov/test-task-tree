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

// console.log('App');
// console.log(process.env.BASELINE);
const basename = process.env.BASELINE || '';

function App() {
  return (
    <Provider store={store}>
      <Router basename={basename}>
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
