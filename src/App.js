import React, { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { FallbackLoading } from "./components/Loading";

import "./App.css";

const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<FallbackLoading />}>
        <Toaster position="top-right" reverseOrder={false} />
        <Switch>
          <Route exact path="/">
            <Layout />
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
