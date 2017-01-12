import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Index from '../../ui/front/home/Index.jsx';
import Registration from '../../ui/front/registration/Registration.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Index}/>
      <Route path="registration" component={Registration}/>
    </Route>
  </Router>
);