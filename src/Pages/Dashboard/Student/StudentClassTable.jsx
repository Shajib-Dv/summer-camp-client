/** @format */

import { FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { data } from "autoprefixer";
import Swal from "sweetalert2";

const StudentClassTable = ({ classInfo, refetch }) => {
  const { _id, classImage, price, className: name } = classInfo;
  const [axiosSecure] = useAxiosSecure();

  const handlePayment = (id) => {
    console.log(id);
  };

  const handleUnselect = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to remove ${name} class`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8C9333",
      cancelButtonColor: "#d336",
      confirmButtonText: "delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure.delete(`/enrolled/${id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${name} class removed from database !`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={classImage} />
              </div>
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{price}</td>
        <td>
          <button onClick={() => handleUnselect(_id)} className="btn btn-xs">
            <FaTrash className="text-red-500" />
          </button>
        </td>
        <td>
          <button onClick={() => handlePayment(_id)} className="btn btn-xs">
            pay
          </button>
        </td>
      </tr>
    </>
  );
};

export default StudentClassTable;
