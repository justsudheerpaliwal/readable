import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostsHome from './components/posts-home';

const App = () => (
  <Switch>
    <Route exact path="/" component={PostsHome} />
  </Switch>
);

export default App;
