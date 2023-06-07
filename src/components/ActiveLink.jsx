/** @format */

import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "border-b-2 text-white font-bold px-3 rounded-md" : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
