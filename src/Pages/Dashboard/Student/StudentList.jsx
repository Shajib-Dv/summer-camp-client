/** @format */

import { FaHome, FaWallet } from "react-icons/fa";
import ActiveDashboard from "../ActiveDashboard";
import { SiGoogleclassroom } from "react-icons/si";
import { CgClapperBoard } from "react-icons/cg";

const StudentList = () => {
  return (
    <>
      <ActiveDashboard to="/">
        <FaHome /> Home
      </ActiveDashboard>
      <ActiveDashboard to="/dashboard/student/my-classes">
        <SiGoogleclassroom /> My Selected Classes
      </ActiveDashboard>
      <ActiveDashboard to="/dashboard/student/my-enrolled">
        <CgClapperBoard /> My Enrolled Classes
      </ActiveDashboard>
      <ActiveDashboard to="/dashboard/student/my-pay-history">
        <FaWallet /> Payment History
      </ActiveDashboard>
    </>
  );
};

export default StudentList;
