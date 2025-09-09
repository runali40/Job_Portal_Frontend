import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {

  const isAuthenticated = !!Cookies.get("UserCredential"); // check token or login status

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;