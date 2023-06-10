/** @format */

import { useForm } from "react-hook-form";
import Heading from "../../../components/Heading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const img_host_url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMG_HOST_KEY
  }`;

  const onSubmit = (data) => {
    const {
      instructorEmail,
      instructorName,
      availableSeats,
      className,
      price,
    } = data;
    console.log(instructorEmail, instructorName);
    try {
      const imageData = new FormData();
      imageData.append("image", data.classImage[0]);

      fetch(img_host_url, {
        method: "POST",
        body: imageData,
      })
        .then((res) => res.json())
        .then((imageRes) => {
          if (imageRes.success) {
            const imgURL = imageRes.data.display_url;
            const saveClasses = {
              instructorEmail,
              instructorName,
              availableSeats,
              className,
              price,
              classImage: imgURL,
              status: "pending",
            };

            axiosSecure.post("/classes", saveClasses).then((data) => {
              if (data.data.insertedId) {
                reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Class added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/dashboard/instructor/my-classes");
              }
            });
          }
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Heading title={"Add your class here"} subTitle={"Hurry up !"} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-4 py-6  shadow-2xl rounded-md"
      >
        <div className="flex flex-col items-center md:flex-row md:gap-10">
          <div className="mb-4 w-full">
            <label htmlFor="className" className="block mb-2 font-medium">
              Class Name
            </label>
            <input
              type="text"
              id="className"
              className="w-full px-3 add-class-input py-2 rounded "
              {...register("className", { required: "Class Name is required" })}
            />
            {errors.className && (
              <span className="text-red-500">{errors.className.message}</span>
            )}
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="classImage" className="block mb-2 font-medium">
              Class Image
            </label>
            <input
              type="file"
              id="classImage"
              className="file-input file-input-bordered w-full max-w-xs block add-class-input"
              {...register("classImage", {
                required: "Class Image is required",
              })}
            />
            {errors.classImage && (
              <span className="text-red-500">{errors.classImage.message}</span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="instructorName" className="block mb-2 font-medium">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructorName"
            className="w-full px-3 add-class-input py-2 rounded"
            value={user?.displayName}
            readOnly
            {...register("instructorName")}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instructorEmail" className="block mb-2 font-medium">
            Instructor Email
          </label>
          <input
            type="text"
            id="instructorEmail"
            className="w-full px-3 add-class-input py-2 rounded"
            value={user?.email}
            readOnly
            {...register("instructorEmail")}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="availableSeats" className="block mb-2 font-medium">
            Available Seats
          </label>
          <input
            type="number"
            id="availableSeats"
            className="w-full px-3 add-class-input py-2 rounded"
            {...register("availableSeats", {
              required: "Available Seats is required",
              min: { value: 0, message: "Seats must be 0 or above" },
            })}
          />
          {errors.availableSeats && (
            <span className="text-red-500">
              {errors.availableSeats.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 font-medium">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="w-full px-3 add-class-input py-2 rounded "
            {...register("price", {
              required: "Price is required",
              min: { value: 0, message: "Price must be 0 or above" },
            })}
          />
          {errors.price && (
            <span className="text-red-500">{errors.price.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-2 w-full btn text-[#8C9333] rounded-md"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddClass;
