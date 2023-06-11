/** @format */
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import signInLottie from "../../../public/login.json";
import SocialLogIn from "../Shared/SocialLogIn/SocialLogIn";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const SignIn = () => {
  const { userSignIn } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  let from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    setError("");
    const { email, password } = data;
    userSignIn(email, password)
      .then(() => {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Sign in.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <>
      <div className="hero min-h-screen py-10 bg-[#94cf4268]">
        <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
          <div className="text-center w-full lg:text-left">
            <h1 className="text-5xl text-center font-bold">Sign in now!</h1>
            <Lottie animationData={signInLottie} loop={true} />
          </div>
          <div className="card w-full shadow-purple-500 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-control w-full relative">
                <label className="label">
                  <span className="label-text">Password*</span>
                </label>
                <input
                  type={showPassword ? "name" : "password"}
                  placeholder="****"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                <div
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                </div>
                <label className="label flex justify-between items-center">
                  <p className="label-text-alt link link-hover">
                    Forgot password?
                  </p>
                  {error && <p className="text-red-500">{error}</p>}
                </label>
              </div>
              <div className="form-control w-full">
                <button className="btn hover:bg-[#8c9333a1] primary-bg">
                  Log in
                </button>
              </div>
            </form>
            <p className="pb-4 text-center">
              New to Hero Sports ! Please
              <Link to="/signup" className="link  px-2">
                Sign up
              </Link>
            </p>
            <SocialLogIn>Sign in</SocialLogIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
