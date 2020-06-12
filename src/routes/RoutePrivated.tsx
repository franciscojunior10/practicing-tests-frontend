import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { isAuthenticated } from './auth';

interface RouterProps extends RouteProps {
  isPrivate: boolean;
  component: React.ComponentType;
}

const RoutePrivated: React.FC<RouterProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const auth = isAuthenticated();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === !!auth ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/formulario',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default RoutePrivated;
