/** @format */

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdCommentsDisabled, MdOutlineDownloadDone } from "react-icons/md";

const ClassTable = ({
  classDetail,
  admin,
  approve,
  deny,
  handleOpenModal,
  handleDeny,
  refetch,
}) => {
  const [axiosSecure] = useAxiosSecure();

  const {
    _id,
    classImage,
    className: name,
    availableSeats,
    price,
    status,
    instructorName,
    instructorEmail,
  } = classDetail;

  //handle status
  const handleApprove = async (id) => {
    const status = { status: "approve" };
    const res = await axiosSecure.put(`/classes/${id}`, status);
    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully approved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleDenyAction = (id) => {
    handleDeny(id);
    handleOpenModal();
  };

  return (
    <>
      <tr>
        <td className="hidden md:inline-block">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={classImage} />
              </div>
            </div>
          </div>
        </td>
        <td className="hidden md:inline-block">{name}</td>
        <td>{availableSeats}</td>
        <td className="hidden md:inline-block">{price}</td>
        <td>{0}</td>
        <td>{status}</td>
        <td>
          {admin ? (
            instructorName
          ) : (
            <span className="btn btn-xs">{"Feedback"}</span>
          )}
        </td>
        <td className={`${admin && "hidden md:inline-block"}`}>
          {admin ? (
            instructorEmail
          ) : (
            <span className="btn btn-xs">{"update"}</span>
          )}
        </td>
        {approve && deny && (
          <>
            <td>
              <button
                disabled={status === "approve" || status === "denied"}
                onClick={() => handleApprove(_id)}
                className="btn btn-xs disabled:opacity-30"
              >
                <MdOutlineDownloadDone className="text-xl" />
              </button>
            </td>
            <td>
              <button
                disabled={status === "approve" || status === "denied"}
                onClick={() => handleDenyAction(_id)}
                className="btn btn-xs disabled:opacity-30"
              >
                <MdCommentsDisabled className="text-xl" />
              </button>
            </td>
          </>
        )}
      </tr>
    </>
  );
};

export default ClassTable;
