/** @format */

import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import signUpLottie from "../../../public/signup.json";
import { Link } from "react-router-dom";
import SocialLogIn from "../Shared/SocialLogIn/SocialLogIn";
import { useState } from "react";

const SignUp = () => {
  const [showFirstPassword, setShowFirstPassword] = useState(false);
  const [showSecondPassword, setShowSecondPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const watchPassword = watch("firstPassword", "");
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
                <div className="form-control w-full relative">
                  <label className="label">
                    {errors.firstPassword ? (
                      <span className="text-red-500 label-text">
                        {errors.firstPassword?.message}
                      </span>
                    ) : (
                      <span className="label-text">Password*</span>
                    )}
                  </label>
                  <input
                    type={showFirstPassword ? "text" : "password"}
                    placeholder="****"
                    className="input input-bordered"
                    {...register("firstPassword", {
                      required: "Password is required",
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                        message: "use number and letter",
                      },
                    })}
                  />
                  <div
                    className="absolute top-1/2 right-2 transform translate-y-1/2 cursor-pointer"
                    onClick={() => setShowFirstPassword(!showFirstPassword)}
                  >
                    {showFirstPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                  </div>
                </div>
                <div className="form-control w-full relative">
                  <label className="label">
                    {errors.secondPassword ? (
                      <span className="text-red-500 label-text">
                        {errors.secondPassword.message}
                      </span>
                    ) : (
                      <span className="label-text">Confirm password*</span>
                    )}
                  </label>
                  <input
                    type={showSecondPassword ? "name" : "password"}
                    placeholder="****"
                    className="input input-bordered"
                    {...register("secondPassword", {
                      required: true,
                      validate: (value) =>
                        value === watchPassword || "Passwords do not match",
                    })}
                  />

                  <div
                    className="absolute top-1/2 right-2 transform translate-y-1/2 cursor-pointer"
                    onClick={() => setShowSecondPassword(!showSecondPassword)}
                  >
                    {showSecondPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                  </div>
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
                <input
                  type="submit"
                  value="Sign up"
                  className="btn hover:bg-[#8c9333a1] bg-[#8C9333]"
                />
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
