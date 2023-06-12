/** @format */

import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
  const [userRole, refetch, isLoading] = useRole();
  const location = useLocation();
  if (isLoading) {
    return <Loader />;
  } else if (userRole === "admin") {
    return children;
  } else {
    return <Navigate to={"/signin"} replace state={{ from: location }} />;
  }
};

export default AdminRoute;
