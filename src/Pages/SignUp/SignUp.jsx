/** @format */

import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import signUpLottie from "../../../public/signup.json";
import { Link } from "react-router-dom";
import SocialLogIn from "../Shared/SocialLogIn/SocialLogIn";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="hero py-10 bg-[#94cf4268] min-h-screen">
        <div className="hero-content flex-col gap-10 lg:flex-row">
          <div className="text-center w-full md:w-1/2 lg:text-left">
            <h1 className="text-5xl pb-6 font-bold">Sign up now!</h1>
            <Lottie animationData={signUpLottie} loop={true} className="w-80" />
          </div>
          <div className="card w-full shadow-2xl shadow-purple-500 bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="md:flex gap-6 items-center">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Name*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="input input-bordered"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="input input-bordered"
                    {...register("email", { required: true })}
                  />
                </div>
              </div>

              <div className="md:flex gap-6 items-center">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Password*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="****"
                    className="input input-bordered"
                    {...register("firstPassword", { required: true })}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Confirm password*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="****"
                    className="input input-bordered"
                    {...register("secondPassword", { required: true })}
                  />
                </div>
              </div>

              <div className="md:flex gap-6 items-center">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Photo url*</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Photo url"
                    className="input input-bordered"
                    {...register("photo", { required: true })}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <select
                    {...register("gender")}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option defaultValue={"Gender"} disabled>
                      Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="md:flex gap-6 items-center">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="input input-bordered"
                    {...register("phone")}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="input input-bordered"
                    {...register("address")}
                  />
                </div>
              </div>

              <div className="form-control">
                <input type="submit" value="Sign up" className="btn" />
              </div>
            </form>
            <p className="pb-4 text-center">
              Already have an account ! Please
              <Link to="/signin" className="link  px-2">
                Sign in
              </Link>
            </p>
            <SocialLogIn>Sign up</SocialLogIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
