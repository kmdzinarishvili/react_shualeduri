import React, { useContext, useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";

import Nav from './Navigation/Nav'
import PrivateRoute from "./Routes/PrivateRoute";
import AuthContext from './Context/AuthContext';

import Home from './Components/Home';
import Register from './Components/Register';
import SecretPage from './Components/SecretPage';
import ErrorPage from './Components/ErrorPage';

function App(props) {
  const aContext = useContext(AuthContext);

  return (
      <React.Fragment>
      <Nav/>
      <hr />
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/register">
          <Register/>
        </Route>

        <PrivateRoute path="/secret_page">
          <SecretPage/>
        </PrivateRoute>

        <Route path="*">
          <ErrorPage/>
        </Route>
      </Switch>
    </React.Fragment>
    // </authContext.Provider>
  );
}

export default App;