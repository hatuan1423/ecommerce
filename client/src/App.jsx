import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { routes } from "./routes";
import Default from "./components/Default";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ShopService from "~/services/ShopService";
import { isJsonString } from "./utils";
import { login } from "./redux/Slices/shopSlice";
import { jwtDecode } from "jwt-decode";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const location = useLocation();
  const dispatch = useDispatch();

  const handleDecoded = () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = jwtDecode(token);
        return { decoded, token };
      }
    } catch (error) {
      console.error("Token decode error:", error);
    }
    return null;
  };

  useEffect(() => {
    const { decoded, token } = handleDecoded();
    if (decoded?.userId) {
      handleGetDetailUser({ userId: decoded?.userId, token });
    }
  }, []);

  const handleGetDetailUser = async ({ userId, token }) => {
    try {
      const res = await ShopService.getDetail({ shopId: userId });
      dispatch(login({ ...res?.metadata, token }));
    } catch (error) {
      console.log(error);
    }
  };

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
