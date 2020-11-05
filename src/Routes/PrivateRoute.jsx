import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

function PrivateRoute({ children, ...rest }) {
  const authContext = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() => {
        if (authContext.authed) {
          return children;
        }
        return <Redirect to="/Register" />;
      }}
    />
  );
}

export default PrivateRoute;