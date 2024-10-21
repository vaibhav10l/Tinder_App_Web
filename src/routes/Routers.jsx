import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { authRoutes, commonRoutes } from './routesConfig';

const Routers = () => {
    const authCtx = true;
    return (
      <Routes>
        {authCtx &&
          authRoutes.map((a) => (
            <Route
              key={a.path}
              path={a.path}
              exact={true}
              sensitive={true}
              element={a.component}
            />
          ))}
        {commonRoutes.map((a) => (
          <Route
            key={a.path}
            path={a.path}
            exact={true}
            sensitive={true}
            element={a.component}
          />
        ))}
      </Routes>
    )
}

export default Routers