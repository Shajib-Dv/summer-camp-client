/** @format */

import { FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { format } from "date-fns";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const StudentClassTable = ({ classInfo, refetch, readOnly }) => {
  const [axiosSecure] = useAxiosSecure();
  const { setPaymentInfo } = useAuth();

  const {
    _id,
    classImage,
    price,
    className: name,
    date,
    transactionId,
  } = classInfo;

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
        console.log(id);
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
        <td>{readOnly ? format(new Date(date), "dd MMMM yyyy") : name}</td>
        <td>${price}</td>
        {readOnly && <td>{transactionId}</td>}
        {!readOnly && (
          <>
            <td>
              <button
                onClick={() => handleUnselect(_id)}
                className="btn btn-xs"
              >
                <FaTrash className="text-red-500" />
              </button>
            </td>
            <td>
              <Link to="/dashboard/student/payment">
                <button
                  onClick={() => setPaymentInfo(classInfo)}
                  className="btn btn-xs"
                >
                  pay
                </button>
              </Link>
            </td>
          </>
        )}
      </tr>
    </>
  );
};

export default StudentClassTable;
