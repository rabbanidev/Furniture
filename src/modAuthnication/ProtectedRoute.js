import { Route, Redirect } from "react-router-dom";
import Error from "../components/Error";
import Layout from "../components/layout/Layout";
import { HashLoading } from "../components/Loading";
import NotFound from "../components/NotFound";
import { useGlobalContext } from "../hooks/context";
import { useGetData } from "../hooks/dataApi";

export default function PrivateRoute({ children, ...rest }) {
  const value = useGlobalContext();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        value.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export function AdminPrivateRoute({ children, ...rest }) {
  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useGetData("userInfo", "/userinfo");

  if (isLoading)
    return (
      <Layout>
        <HashLoading />
      </Layout>
    );
  if (isError)
    return (
      <Layout>
        <Error message={error.message} />
      </Layout>
    );

  return (
    <Route
      {...rest}
      render={() => (list.data.role === "admin" ? children : <NotFound />)}
    />
  );
}
