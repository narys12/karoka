import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Index from '../../ui/front/home/Index.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
    </Route>
  </Router>
);