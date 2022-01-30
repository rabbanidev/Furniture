import { lazy } from "react";

const ProductList = lazy(() => import("./Product"));
const ProductDetails = lazy(() => import("./productDetails/ProductDetails"));

export { ProductList, ProductDetails };
