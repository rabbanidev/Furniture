import React, { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FallbackLoading } from "./components/Loading";

import "./App.css";

import PrivateRoute, {
  AdminPrivateRoute,
  UserPrivateRoute,
} from "./modAuthnication/ProtectedRoute";
import * as ModLanding from "./modLanding";
import * as ModProduct from "./modProduct";
import * as ModAuthnication from "./modAuthnication";
import * as ModCart from "./modCart";
import * as ModCheckout from "./modCheckout";
import * as ModAdmin from "./modAdmin";
import * as ModUser from "./modUser";
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

          {/* Mod Authnication */}
          <Route path="/signin">
            <ModAuthnication.SignIn />
          </Route>
          <Route path="/signup">
            <ModAuthnication.SignUp />
          </Route>
          <Route path="/forget-password">
            <ModAuthnication.ForgetPassword />
          </Route>

          {/* Mod Category */}
          <Route path="/product-category/:category/:subCategory/:superCategory">
            <ModProduct.ProductList />
          </Route>
          <Route path="/product-category/:category/:subCategory">
            <ModProduct.ProductList />
          </Route>
          <Route path="/product-category/:category">
            <ModProduct.ProductList />
          </Route>
          <Route path="/product/:productId">
            <ModProduct.ProductDetails />
          </Route>
          <Route path="/cart">
            <ModCart.Cart />
          </Route>

          {/* Mod Checkout */}
          <PrivateRoute path="/checkout">
            <ModCheckout.Checkout />
          </PrivateRoute>

          {/* User Route */}
          <PrivateRoute path="/user/my-account">
            <ModUser.MyAccount />
          </PrivateRoute>
          <PrivateRoute exact path="/user/my-orders">
            <UserPrivateRoute>
              <ModUser.MyOrder />
            </UserPrivateRoute>
          </PrivateRoute>
          <PrivateRoute path="/user/my-order/details/:id">
            <UserPrivateRoute>
              <ModUser.OrderDetails />
            </UserPrivateRoute>
          </PrivateRoute>
          <PrivateRoute path="/user/my-address-book">
            <UserPrivateRoute>
              <ModUser.UserAddress />
            </UserPrivateRoute>
          </PrivateRoute>

          {/* Admin Route */}
          <PrivateRoute path="/admin/dashboard">
            <AdminPrivateRoute>
              <ModAdmin.Dashboard />
            </AdminPrivateRoute>
          </PrivateRoute>
          <PrivateRoute exact path="/admin/product-list">
            <AdminPrivateRoute>
              <ModAdmin.ProductList />
            </AdminPrivateRoute>
          </PrivateRoute>
          <PrivateRoute path="/admin/product-list/add">
            <AdminPrivateRoute>
              <ModAdmin.ProductAdd />
            </AdminPrivateRoute>
          </PrivateRoute>
          <PrivateRoute path="/admin/product-list/edit/:id">
            <AdminPrivateRoute>
              <ModAdmin.ProductEdit />
            </AdminPrivateRoute>
          </PrivateRoute>
          <PrivateRoute exact path="/admin/order-list">
            <AdminPrivateRoute>
              <ModAdmin.OrderList />
            </AdminPrivateRoute>
          </PrivateRoute>
          <PrivateRoute path="/admin/order-list/edit/:id">
            <AdminPrivateRoute>
              <ModAdmin.OrderEdit />
            </AdminPrivateRoute>
          </PrivateRoute>
          <PrivateRoute exact path="/admin/user-list">
            <AdminPrivateRoute>
              <ModAdmin.UserList />
            </AdminPrivateRoute>
          </PrivateRoute>
          <PrivateRoute path="/admin/user-list/edit/:id">
            <AdminPrivateRoute>
              <ModAdmin.UserEdit />
            </AdminPrivateRoute>
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
