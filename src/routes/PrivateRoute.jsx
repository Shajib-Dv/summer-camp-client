/** @format */

import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useAuth();
  const location = useLocation();

  if (loader) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/signin" replace />;
};

export default PrivateRoute;
