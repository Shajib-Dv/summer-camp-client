/** @format */

import Swal from "sweetalert2";
import googleLogo from "../../../assets/google.png";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
const SocialLogIn = ({ children }) => {
  const { googleSignIn } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();

  const handleGoogleSignin = () => {
    googleSignIn().then(async (result) => {
      const user = result.user;
      const saveUser = {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
        role: "student",
      };
      const res = await axiosSecure.put("/users", saveUser);
      if (res.data) {
        console.log("sosal", res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User created successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      navigate("/");
    });
  };

  return (
    <>
      <div className="flex items-center gap-4 justify-center">
        <hr className="border-black border w-full" />
        OR
        <hr className="border-black border w-full" />
      </div>
      <div
        onClick={handleGoogleSignin}
        className="btn gap-4 md:w-1/2 mx-auto mb-4 hover:bg-[#8c9333a1]"
      >
        <img src={googleLogo} className="w-12" />
        <p className="text-sm text-black capitalize">{children} with Google</p>
      </div>
    </>
  );
};

export default SocialLogIn;
