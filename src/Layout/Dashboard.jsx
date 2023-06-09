/** @format */

import { Outlet } from "react-router-dom";
import UserProfile from "../Pages/Dashboard/UserProfile";

const Dashboard = () => {
  return (
    <>
      <div className="drawer lg:drawer-open bg-gradient-to-r to-[#c3f637a1] from-[#f66ef438]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-10 flex flex-col p-6 md:p-10">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side border-r border-purple-500 md:pt-10  mt-24 md:m-0 text-black">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="menu p-4 w-80 h-full text-black bg-[#ffffff] md:bg-transparent">
            <UserProfile />
            {/* TODO: insert link here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
