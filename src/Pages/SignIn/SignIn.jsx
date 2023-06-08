/** @format */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import signInLottie from "../../../public/login.json";
import SocialLogIn from "../Shared/SocialLogIn/SocialLogIn";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
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
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password*</span>
                </label>
                <input
                  type="password"
                  placeholder="****"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                <label className="label">
                  <p className="label-text-alt link link-hover">
                    Forgot password?
                  </p>
                </label>
              </div>
              <div className="form-control w-full">
                <button className="btn hover:bg-[#8c9333a1] bg-[#8C9333]">
                  Log in
                </button>
              </div>
            </form>
            <p className="pb-4 text-center">
              New to summer camp ! Please
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
