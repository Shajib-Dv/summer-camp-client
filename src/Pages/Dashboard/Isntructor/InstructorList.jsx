/** @format */

import { FaHome, FaChalkboardTeacher } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import ActiveDashboard from "../ActiveDashboard";

const InstructorList = () => {
  return (
    <>
      <ActiveDashboard to="/dashboard/instructor/home">
        <FaHome /> Home
      </ActiveDashboard>
      <ActiveDashboard to="/dashboard/instructor/add-class">
        <GiTeacher /> Add A Class
      </ActiveDashboard>
      <ActiveDashboard to="/dashboard/instructor/my-classes">
        <FaChalkboardTeacher /> My Classes
      </ActiveDashboard>
    </>
  );
};

export default InstructorList;
