import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { routes } from './routes';
import Default from './components/Default';
import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const location = useLocation();

  useEffect(() => {
    const currentRoute = routes.find(
      (route) => route.path === location.pathname
    );
    if (currentRoute && currentRoute.title) {
      document.title = currentRoute.title;
    }
  }, [location]);

  return (
    <div data-theme={theme}>
      <Routes>
        {routes.map((route) => {
          const Page = route.page;
          const Layout = route.isHeader ? Default : Fragment;
          return (
            <Route
              key={route.page}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
