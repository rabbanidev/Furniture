import { HiOutlineHome, HiOutlineShoppingBag } from "react-icons/hi";
import { FiBox, FiUsers } from "react-icons/fi";

export const admindashboard = [
  {
    name: "Dashboard",
    link: "/admin/dashboard",
    Icon: HiOutlineHome,
  },
  {
    name: "Product List",
    link: "/admin/product-list",
    Icon: FiBox,
  },
  {
    name: "Order List",
    link: "/admin/order-list",
    Icon: HiOutlineShoppingBag,
  },
  {
    name: "User List",
    link: "/admin/user-list",
    Icon: FiUsers,
  },
];

export const userdashboard = [
  {
    name: "My Account",
    link: "/user/my-account",
    Icon: HiOutlineHome,
  },
  {
    name: "My Order",
    link: "/user/my-order",
    Icon: HiOutlineShoppingBag,
  },
];
