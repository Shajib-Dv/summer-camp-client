/** @format */

import ActiveDashboard from "../ActiveDashboard";
import { FaHome, FaUsers } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

const AdminList = () => {
  return (
    <>
      <ActiveDashboard to="/dashboard/admin/home">
        <FaHome /> Home
      </ActiveDashboard>
      <ActiveDashboard to="/dashboard/admin/manage-class">
        <SiGoogleclassroom /> Manage Class
      </ActiveDashboard>
      <ActiveDashboard to="/dashboard/admin/manage-user">
        <FaUsers /> Manage User
      </ActiveDashboard>
    </>
  );
};

export default AdminList;
