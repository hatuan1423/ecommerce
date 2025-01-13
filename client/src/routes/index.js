import Account from "~/pages/AccountPage";
import Address from "~/pages/AddressPage";
import Cart from "~/pages/CartPage";
import Collection from "~/pages/CollectionPage";
import HomePage from "~/pages/HomePage";
import Login from "~/pages/LoginPage";
import NotFoundPage from "~/pages/NotFoundPage";
import Product from "~/pages/ProductPage";
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
        path: "/collection",
        page: Collection,
        title: "Tất cả sản phẩm - Baya",
        isHeader: true
    },
    {
        path: "/account",
        page: Account,
        title: "Tài khoản - Baya",
        isHeader: true
    },
    {
        path: "/account/address",
        page: Address,
        title: "Địa chỉ - Baya",
        isHeader: true
    },
    {
        path: "/product",
        page: Product,
        title: "Sản phẩm - Baya",
        isHeader: true
    },
    {
        path: "/cart",
        page: Cart,
        title: "Giỏ hàng của bạn - Baya",
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