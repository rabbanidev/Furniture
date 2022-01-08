import React, { lazy, Suspense, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FallbackLoading } from "./components/Loading";

import "./App.css";
import ModLanding from "./modLanding";
import ModProductList from "./modProduct";
import ProductDetails from "./modProduct/productDetails/ProductDetails";
import ModCartList from "./modCart";

const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<FallbackLoading />}>
        <Toaster position="top-right" reverseOrder={false} />
        <Switch>
          <Route exact path="/">
            <ModLanding />
          </Route>

          <Route path="/product-category/:category/:subCategory/:superCategory">
            <ModProductList />
          </Route>
          <Route path="/product-category/:category/:subCategory">
            <ModProductList />
          </Route>
          <Route path="/product-category/:category">
            <ModProductList />
          </Route>
          <Route path="/product/:productId">
            <ProductDetails />
          </Route>
          <Route path="/cart">
            <ModCartList />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
