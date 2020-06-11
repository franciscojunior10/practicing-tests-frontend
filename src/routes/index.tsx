import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Form from '../pages/Form';
import Listing from '../pages/Listing';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login}></Route>
      <Route path="/formulario" exact component={Form}></Route>
      <Route path="/listagem" exact component={Listing}></Route>
    </Switch>
  );
};

export default Routes;
