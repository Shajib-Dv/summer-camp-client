/** @format */

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const ClassCard = ({ classDetails, userRole, refetch }) => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [disabled, setDisabled] = useState(false);

  const {
    _id,
    classImage,
    price,
    className,
    availableSeats,
    instructorName,
    instructorEmail,
  } = classDetails;

  const handleEnrolled = async (id) => {
    const enrolledClass = {
      classId: _id,
      price: parseFloat(price),
      className,
      email: user?.email,
      classImage,
    };

    await axiosSecure
      .put(`/enrolled/${id}`, enrolledClass)
      .then(async (data) => {
        if (data.data) {
          setDisabled(true);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Complete payment for confirm !",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="card w-full bg-[#8C9333] shadow-purple-500 shadow-2xl">
      <figure>
        <img src={classImage} className="md:h-64 object-cover" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{className}</h2>
          <span className="card-title border-b text-white font-bold px-3 rounded-md">
            ${price}
          </span>
        </div>
        <p className="font-semibold">
          Instructor : <span>{instructorName}</span>
        </p>
        <p className="font-semibold">
          Available Seats : <span>{availableSeats}</span>
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleEnrolled(_id)}
            disabled={
              userRole === "admin" ||
              userRole === "instructor" ||
              availableSeats == 0 ||
              disabled
            }
            className="border-b-2 text-white font-bold px-3 rounded-md disabled:opacity-50"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
