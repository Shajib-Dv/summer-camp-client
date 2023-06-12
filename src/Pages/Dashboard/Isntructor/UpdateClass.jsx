/** @format */

import { useForm } from "react-hook-form";
import Heading from "../../../components/Heading";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdateClass = () => {
  const { feedbackOrId } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { availableSeats, price } = data;
    const status = {
      availableSeats: parseInt(availableSeats),
      price: parseFloat(price),
    };

    const res = await axiosSecure.put(`/classes/${feedbackOrId}`, status);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Updated successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/instructor/my-classes");
    }
  };

  return (
    <>
      <Helmet>
        <title>Hero Sports | update class</title>
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading title={"Update your class"} />
        <div className="primary-bg rounded-md p-4 w-full md:w-1/2 mx-auto my-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered"
              {...register("price", {
                required: "Price is required",
                min: { value: 0, message: "Price must be 0 or above" },
              })}
            />
            {errors.price && (
              <span className="text-gray-600">{errors.price.message}</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available seat</span>
            </label>
            <input
              type="number"
              placeholder="Available seat"
              className="input input-bordered"
              {...register("availableSeats", {
                required: "Available Seats is required",
                min: { value: 0, message: "Seats must be 0 or above" },
              })}
            />
            {errors.availableSeats && (
              <span className="text-gray-600">
                {errors.availableSeats.message}
              </span>
            )}
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="border-b-2 border-white rounded-md text-white"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateClass;
