/** @format */

import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20 min-h-[calc(100vh-250px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
