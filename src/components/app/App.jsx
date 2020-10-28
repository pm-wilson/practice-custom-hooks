import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ListPage from '../../pages/ListPage';
import DetailPage from '../../pages/DetailPage';
import Header from '../../pages/Header';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            component={ListPage}
          />
          <Route
            path="/details/:name"
            exact
            component={DetailPage}
          />
        </Switch>
      </Router>
    </div>
  );
}
