import HomePage from "~/pages/HomePage";
import Login from "~/pages/LoginPage";
import NotFoundPage from "~/pages/NotFoundPage";
import Register from "~/pages/RegisterPage";

export const routes = [
    {
        path: "/",
        page: HomePage,
        title: "Siêu thị nội thất & trang trí Baya",
        isHeader: true
    },
    {
        path: "/account/register",
        page: Register,
        title: "Tạo tài khoản - Baya",
        isHeader: true
    },
    {
        path: "/account/login",
        title: "Tài khoản - Baya",
        page: Login,
        isHeader: true
    },
    {
        path: "*",
        title: "Không tìm thấy trang - Baya",
        page: NotFoundPage,
        isHeader: true
    },
]