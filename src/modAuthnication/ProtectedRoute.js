import { Route, Redirect } from "react-router-dom";
import { useGlobalContext } from "../hooks/context";

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
