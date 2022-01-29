import React, { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FallbackLoading } from "./components/Loading";

import "./App.css";
import ModProductList from "./modProduct";
import ProductDetails from "./modProduct/productDetails/ProductDetails";
import ModCheckout from "./modCheckout";

import * as ModLanding from "./modLanding";
import * as ModAuthnication from "./modAuthnication";
import * as ModCart from "./modCart";
import * as ModAdmin from "./modAdmin";
import * as ModUser from "./modUser";
import PrivateRoute from "./modAuthnication/ProtectedRoute";
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<FallbackLoading />}>
        <Toaster position="top-right" reverseOrder={false} />
        <Switch>
          <Route exact path="/">
            <ModLanding.Landing />
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
            <ModCart.Cart />
          </Route>

          <PrivateRoute path="/checkout">
            <ModCheckout />
          </PrivateRoute>

          {/* User Route */}
          <PrivateRoute path="/user/my-account">
            <ModUser.MyAccount />
          </PrivateRoute>
          <PrivateRoute exact path="/user/my-order">
            <ModUser.MyOrder />
          </PrivateRoute>
          <PrivateRoute path="/user/my-order/details/:id">
            <ModUser.OrderDetails />
          </PrivateRoute>

          {/* Admin Route */}
          <PrivateRoute path="/admin/dashboard">
            <ModAdmin.Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/admin/product-list">
            <ModAdmin.ProductList />
          </PrivateRoute>
          <PrivateRoute path="/admin/product-list/add">
            <ModAdmin.ProductAdd />
          </PrivateRoute>
          <PrivateRoute path="/admin/product-list/edit/:id">
            <ModAdmin.ProductEdit />
          </PrivateRoute>

          <PrivateRoute exact path="/admin/order-list">
            <ModAdmin.OrderList />
          </PrivateRoute>
          <PrivateRoute path="/admin/order-list/edit/:id">
            <ModAdmin.OrderEdit />
          </PrivateRoute>

          <PrivateRoute exact path="/admin/user-list">
            <ModAdmin.UserList />
          </PrivateRoute>
          <PrivateRoute path="/admin/user-list/edit/:id">
            <ModAdmin.UserEdit />
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
