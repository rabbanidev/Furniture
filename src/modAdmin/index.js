import { lazy } from "react";

const ProductList = lazy(() => import("./product/ProductList"));
const ProductAdd = lazy(() => import("./product/ProductAdd"));

const OrderList = lazy(() => import("./order/OrderList"));
const UserList = lazy(() => import("./user/UserList"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));

export { ProductList, ProductAdd, OrderList, UserList, Dashboard };
