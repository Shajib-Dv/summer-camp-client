/** @format */

import { Outlet } from "react-router-dom";
import UserProfile from "../Pages/Dashboard/UserProfile";
import InstructorList from "../Pages/Dashboard/Isntructor/InstructorList";
import useRole from "../hooks/useRole";
import StudentList from "../Pages/Dashboard/Student/StudentList";
import AdminList from "../Pages/Dashboard/Admin/AdminList";
import Loader from "../components/Loader";
import { BsBoxArrowRight } from "react-icons/bs";

const Dashboard = () => {
  const [userRole, refetch, isLoading] = useRole();

  return (
    <>
      <div className="drawer lg:drawer-open bg-gradient-to-r to-[#c3f637a1] from-[#f66ef438]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-10 flex flex-col p-6 md:p-10">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn primary-bg border-white  shadow-xl drawer-button lg:hidden fixed top-1/2 left-0"
          >
            <BsBoxArrowRight className="text-xl text-white" />
          </label>
        </div>
        <div className="drawer-side  border-r-2 border-[#8C9333] md:pt-10  mt-24 md:m-0 text-black">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          {isLoading ? (
            <div className="w-80">
              <Loader />
            </div>
          ) : (
            <div className="menu p-4 w-80 h-full text-black bg-[#ffffff] md:bg-transparent">
              <UserProfile role={userRole} />
              <div className="space-y-4 flex flex-col font-bold mt-6 text-xl">
                {userRole === "admin" ? (
                  <AdminList />
                ) : userRole === "instructor" ? (
                  <InstructorList />
                ) : (
                  <StudentList />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
