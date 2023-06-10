/** @format */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";
import { FaTimes, FaBars } from "react-icons/fa";
import BrandLogo from "./BrandLogo";
import useAuth from "../../hooks/useAuth";
import ActiveLink from "../../components/ActiveLink";
import Swal from "sweetalert2";
import PostCamp from "./PostCamp";
import BecomeInstructor from "../Shared/SocialLogIn/Modal/BecomeInstructor";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useInstructor from "../../hooks/useInstructor";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const [isInstructor, refetch] = useInstructor();

  const handleSignOut = () => {
    logOut().then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully Sign out !",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

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
    return (
      <button onClick={handleSignOut} className="primary-btn font-semibold">
        Sign out
      </button>
    );
  };

  //modal
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleBecomeInstructor = async () => {
    const saveInstructor = {
      name: user?.displayName,
      email: user?.email,
      date: new Date(),
    };
    const res = await axiosSecure.post("/instructors", saveInstructor);
    if (res.data.insertedId) {
      console.log(res.data);

      Swal.fire({
        position: "center",
        icon: "success",
        title: `${user?.displayName} you will be notified soon when the admin approve you as an instructor.`,
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
      navigate("/");
    }
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
              <ul
                onClick={() => setNavbar(!navbar)}
                className="md:items-center md:justify-center space-y-4 flex flex-col md:flex-row md:space-x-6 md:space-y-0 text-black font-semibold"
              >
                {/*TODO: Link goes here */}
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/instructors">Instructors</ActiveLink>
                <ActiveLink to="/classes">Classes</ActiveLink>
                {user && <ActiveLink to="/dashboard">Dashboard</ActiveLink>}
                {!isInstructor && user && <PostCamp onClick={openModal} />}
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
      <BecomeInstructor
        isOpen={modalOpen}
        onClose={closeModal}
        onBecomeInstructor={handleBecomeInstructor}
        title={"Do you want to post your camp!"}
        subTitle={" Please click Become an Instructor to post your course."}
      />
    </>
  );
};

export default Navbar;
