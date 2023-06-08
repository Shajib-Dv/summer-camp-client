/** @format */

import googleLogo from "../../../assets/google.png";
const SocialLogIn = ({ children }) => {
  return (
    <>
      <div className="flex items-center gap-4 justify-center">
        <hr className="border-black border w-full" />
        OR
        <hr className="border-black border w-full" />
      </div>
      <div className="btn gap-4 md:w-1/2 mx-auto mb-4">
        <img src={googleLogo} className="w-12" />
        <p className="text-sm text-black capitalize">{children} with Google</p>
      </div>
    </>
  );
};

export default SocialLogIn;
