/** @format */
import Lottie from "lottie-react";
import subscribeBg from "../../../public/subscribe-bg.json";

const FeaturedSection = () => {
  return (
    <div>
      <div className="w-full h-80 md:h-96 mx-auto object-cover overflow-hidden relative">
        <Lottie animationData={subscribeBg} loop={true} />
        <div className="absolute top-0 flex flex-col justify-center items-center h-full w-full">
          <div className="w-4/5 h-4/5 bg-black bg-opacity-50 rounded-md flex flex-col justify-center items-center space-y-6">
            <h2 className="text-2xl font-bold text-white px-4">
              Subscribe Our News Letter to Get Regular Updates
            </h2>
            <div className="join">
              <input
                className="input focus:outline-none text-white join-item"
                placeholder="Your Email"
              />
              <button className="btn join-item text-white rounded-r-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
