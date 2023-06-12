/** @format */

import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import useRole from "../hooks/useRole";

const StudentRoute = ({ children }) => {
  const [userRole, refetch, isLoading] = useRole();
  const location = useLocation();
  if (isLoading) {
    return <Loader />;
  }
  if (userRole === "student") {
    return children;
  }
  return <Navigate to={"/signin"} replace state={{ from: location }} />;
};

export default StudentRoute;
