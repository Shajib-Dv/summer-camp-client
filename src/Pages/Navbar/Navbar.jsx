/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";
import { FaTimes, FaBars } from "react-icons/fa";
import BrandLogo from "./BrandLogo";
import useAuth from "../../hooks/useAuth";
import ActiveLink from "../../components/ActiveLink";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { user } = useAuth();

  //sign in button
  const SignInBtn = () => {
    return (
      <Link to="/signin">
        <button className="primary-btn font-semibold">Sign in</button>
      </Link>
    );
  };

  //sign Out button
  const SignOutBtn = () => {
    return <button className="primary-btn font-semibold">Sign out</button>;
  };

  return (
    <>
      <nav className="w-full bg-[#8C9333] md:px-10 fixed top-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <BrandLogo />
              {user && (
                <div className="md:hidden">
                  <UserProfile />
                </div>
              )}
              <div className="md:hidden">
                <button
                  className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <FaTimes /> : <FaBars />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="md:items-center md:justify-center space-y-4 flex flex-col md:flex-row md:space-x-6 md:space-y-0 text-black font-semibold">
                {/*TODO: Link goes here */}
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/instructors">Instructors</ActiveLink>
                <ActiveLink to="/classes">Classes</ActiveLink>
                {user && <ActiveLink to="/dashboard">Dashboard</ActiveLink>}
              </ul>

              <div className="mt-3 space-y-2 md:hidden">
                {user ? <SignOutBtn /> : <SignInBtn />}
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-flex items-center">
            <UserProfile />
            {user ? <SignOutBtn /> : <SignInBtn />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
