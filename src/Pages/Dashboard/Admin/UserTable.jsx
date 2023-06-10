/** @format */

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserTable = ({ user }) => {
  const { _id, email, name, photo, role } = user;
  const [axiosSecure] = useAxiosSecure();

  const handleMakeAdmin = async (id, name) => {
    console.log(id);
    const role = { role: "admin" };
    const res = await axiosSecure.patch(`/users/${id}`, role);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${name} is instructor now !`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleMakeInstructor = async (id, name) => {
    console.log(id);
    const role = { role: "instructor" };
    const res = await axiosSecure.patch(`/users/${id}`, role);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${name} is instructor now !`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <tr>
        <td>
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
            onClick={() => handleMakeAdmin(_id, name)}
            className="btn btn-xs"
          >
            Admin
          </button>
        </td>
        <td>
          <button
            onClick={() => handleMakeInstructor(_id, name)}
            className="btn btn-xs"
          >
            Instructor
          </button>
        </td>
      </tr>
    </>
  );
};

export default UserTable;
