/** @format */

import { Link } from "react-router-dom";

const BrandLogo = () => {
  return (
    <>
      <Link to="/">
        <div className="flex items-center">
          <img src="/logo.png" className="w-16  rounded-full bg-cover" />
          <p className=" md:block text-2xl text-black font-bold">Summer-Camp</p>
        </div>
      </Link>
    </>
  );
};

export default BrandLogo;
