/** @format */

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";

const UserTable = ({ user, refetch, request }) => {
  const { _id, email, name, photo, role } = user;
  const [axiosSecure] = useAxiosSecure();

  const handleMakeAdmin = async (id, name) => {
    const role = { role: "admin" };
    const res = await axiosSecure.patch(`/users/${id}`, role);
    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${name} is admin now !`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleMakeInstructor = async (id, name) => {
    const role = { role: "instructor" };
    const res = await axiosSecure.patch(`/users/${id}`, role);
    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${name} is instructor now !`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleUserDelete = async (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to remove ${name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8C9333",
      cancelButtonColor: "#d336",
      confirmButtonText: "delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/users/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} removed from database !`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  const handleRequestInstructor = async (name, email) => {
    console.log(email, name);
    const role = { role: "instructor" };
    const res = await axiosSecure.patch(`/instructor/${email}`, role);
    if (res.data) {
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${name} is instructor now !`,
        showConfirmButton: false,
        timer: 1500,
      });

      const res = await axiosSecure.delete(`/instructor/${email}`);
      if (res.data) {
        refetch();
        console.log(res.data);
      }
    }
  };

  return (
    <>
      {request ? (
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>
            <button
              onClick={() => handleRequestInstructor(name, email)}
              className="btn btn-xs"
            >
              Admit
            </button>
          </td>
        </tr>
      ) : (
        <tr>
          <td className="hidden md:inline-flex">
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={photo} />
                </div>
              </div>
            </div>
          </td>
          <td className="hidden md:inline-flex">{email}</td>
          <td>{name}</td>
          <td>{role}</td>
          <td>
            <button
              disabled={role === "admin" || role === "instructor"}
              onClick={() => handleMakeAdmin(_id, name)}
              className="btn btn-xs disabled:opacity-40"
            >
              Admin
            </button>
          </td>
          <td>
            <button
              disabled={role === "admin" || role === "instructor"}
              onClick={() => handleMakeInstructor(_id, name)}
              className="btn btn-xs disabled:opacity-40"
            >
              Instructor
            </button>
          </td>
          <td>
            <button
              onClick={() => handleUserDelete(_id, name)}
              className="btn btn-xs"
            >
              <FaTrash className="text-red-400" />
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default UserTable;
