import HomePage from "~/pages/HomePage";
import Login from "~/pages/LoginPage";
import NotFoundPage from "~/pages/NotFoundPage";
import Register from "~/pages/RegisterPage";

export const routes = [
    {
        path: "/",
        page: HomePage,
        isHeader: true
    },
    {
        path: "/register",
        page: Register,
        isHeader: false
    },
    {
        path: "/login",
        page: Login,
        isHeader: false
    },
    {
        path: "*",
        page: NotFoundPage
    },
]