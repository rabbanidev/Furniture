import React, { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FallbackLoading } from "./components/Loading";

import "./App.css";
import ModLanding from "./modLanding";
import ModProductList from "./modProduct";
import ProductDetails from "./modProduct/productDetails/ProductDetails";
import ModCartList from "./modCart";
import ModCheckout from "./modCheckout";

import * as ModAuthnication from "./modAuthnication/index";
import PrivateRoute from "./modAuthnication/ProtectedRoute";
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

          <Route path="/signin">
            <ModAuthnication.SignIn />
          </Route>
          <Route path="/signup">
            <ModAuthnication.SignUp />
          </Route>
          <Route path="/forget-password">
            <ModAuthnication.ForgetPassword />
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

          <PrivateRoute path="/checkout">
            <ModCheckout />
          </PrivateRoute>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
