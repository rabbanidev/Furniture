import { lazy } from "react";

const MyAccount = lazy(() => import("./myAccount/MyAccount"));
const MyOrder = lazy(() => import("./myOrder/MyOrder"));
const OrderDetails = lazy(() => import("./myOrder/OrderDetails"));

export { MyAccount, MyOrder, OrderDetails };
