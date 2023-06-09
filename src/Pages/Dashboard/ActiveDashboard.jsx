/** @format */

import { NavLink } from "react-router-dom";

const ActiveDashboard = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "border-b-2 border-[#8C9333] text-black font-bold px-3 rounded-md flex gap-2 items-center"
          : "flex gap-2 items-center hover:bg-[#b7c03f] p-2 rounded-lg"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveDashboard;
