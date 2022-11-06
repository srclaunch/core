import { Route as RouteType } from '@srclaunch/types';
import { ElementType, memo, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import { store } from '../state';

export type RouterViewProps = {
  readonly routes: readonly RouteType[];
};

export const RouterView = ({
  routes = [],
  ...props
}: RouterViewProps): ReactElement => {
  return (
    // <Provider store={store}>
    <Router>
      <Routes>
        {routes.map((route, key) => {
          const Component = route.component;

          return (
            <Route
              element={Component ? <Component /> : undefined}
              path={route.path}
              key={key}
              {...route}
            />
          );
        })}
      </Routes>
    </Router>
    // </Provider>
  );
};
