import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import HomeContainer from '../../ui/front/home/HomeContainer.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomeContainer}>
    </Route>
  </Router>
);