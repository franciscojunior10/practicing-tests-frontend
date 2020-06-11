import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Formulario from '../pages/Formulario';
import Listagem from '../pages/Listagem';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login}></Route>
      <Route path="/formulario" exact component={Formulario}></Route>
      <Route path="/listagem" exact component={Listagem}></Route>
    </Switch>
  );
};

export default Routes;
