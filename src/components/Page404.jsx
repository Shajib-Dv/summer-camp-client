/** @format */

import Lottie from "lottie-react";
import lottie404 from "../../public/error-404.json";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="w-full h-[600px] relative">
      <Link to="/" className="text-2xl text-[#8C9333] btn m-4 ">
        Back to home
      </Link>
      <Lottie animationData={lottie404} loop={true} className="h-full" />
    </div>
  );
};

export default Page404;
