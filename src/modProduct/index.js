import { lazy } from "react";

const ProductList = lazy(() => import("./Product"));
const SearchProduct = lazy(() => import("./SearchProduct"));
const ProductDetails = lazy(() => import("./productDetails/ProductDetails"));

export { ProductList, SearchProduct, ProductDetails };
