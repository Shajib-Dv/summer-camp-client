/** @format */

import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card  md:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="flex gap-6 items-center">
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

              <div className="flex gap-6 items-center">
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

              <div className="flex gap-6 items-center">
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

              <div className="flex gap-6 items-center">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
