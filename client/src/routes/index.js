import HomePage from "~/pages/HomePage";
import NotFoundPage from "~/pages/NotFoundPage";
import OrderPage from "~/pages/OrderPage";
import ProductDetailPage from "~/pages/ProductDetailPage";
import ProductsPage from "~/pages/ProductsPage";

export const routes = [
    {
        path: "/",
        page: HomePage,
        isHeader: true
    },
    {
        path: "/products",
        page: ProductsPage,
        isHeader: true

    },
    {
        path: "/product-detail",
        page: ProductDetailPage,
        isHeader: true
    },
    {
        path: "/order",
        page: OrderPage,
        isHeader: true
    },
    {
        path: "*",
        page: NotFoundPage
    },
]