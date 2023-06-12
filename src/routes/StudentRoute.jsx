/** @format */

import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import useRole from "../hooks/useRole";

const StudentRoute = ({ children }) => {
  const [userRole, refetch, isLoading] = useRole();
  if (isLoading) {
    return <Loader />;
  } else if (userRole === "student") {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default StudentRoute;
