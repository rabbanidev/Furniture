import { HiOutlineHome, HiOutlineShoppingBag } from "react-icons/hi";
import { FiBox } from "react-icons/fi";

export const dashboard = [
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
    Icon: HiOutlineShoppingBag,
  },
];
