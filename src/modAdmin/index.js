import { lazy } from "react";

const ProductList = lazy(() => import("./product/ProductList"));
const ProductAdd = lazy(() => import("./product/ProductAdd"));
const ProductEdit = lazy(() => import("./product/ProductEdit"));

const OrderList = lazy(() => import("./order/OrderList"));
const OrderEdit = lazy(() => import("./order/OrderEdit"));

const UserList = lazy(() => import("./user/UserList"));
const UserEdit = lazy(() => import("./user/UserEdit"));

const Dashboard = lazy(() => import("./dashboard/Dashboard"));

export {
  ProductList,
  ProductAdd,
  ProductEdit,
  OrderList,
  OrderEdit,
  UserList,
  UserEdit,
  Dashboard,
};
