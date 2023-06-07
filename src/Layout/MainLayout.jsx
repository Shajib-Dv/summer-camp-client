/** @format */

import Home from "../Pages/Home/Home";
import Navbar from "../Pages/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Home />
      </div>
    </>
  );
};

export default MainLayout;
