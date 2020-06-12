import React from 'react';

import { Switch } from 'react-router-dom';

import RoutePrivated from './RoutePrivated';

import Login from '../pages/Login';
import Form from '../pages/Form';
import Listing from '../pages/Listing';

const Routes: React.FC = () => {
  return (
    <Switch>
      <RoutePrivated path="/" exact component={Login} isPrivate={false}></RoutePrivated>
      <RoutePrivated path="/formulario" exact component={Form} isPrivate></RoutePrivated>
      <RoutePrivated path="/listagem" exact component={Listing} isPrivate></RoutePrivated>
    </Switch>
  );
};

export default Routes;
