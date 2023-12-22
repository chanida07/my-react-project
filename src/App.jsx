import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPage from './ListPage';
import InputPage from './InputPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ListPage} />
        <Route path="/input" component={InputPage} />
      </Switch>
    </Router>
  );
};

export default App;
