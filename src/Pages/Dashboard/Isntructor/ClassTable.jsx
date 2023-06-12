/** @format */

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdCommentsDisabled, MdOutlineDownloadDone } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const ClassTable = ({
  classDetail,
  admin,
  approve,
  deny,
  handleOpenModal,
  handleDeny,
  refetch,
  home,
}) => {
  const [axiosSecure] = useAxiosSecure();
  const { setFeedbackOrId } = useAuth();

  const {
    _id,
    classImage,
    className: name,
    availableSeats,
    price,
    status,
    instructorName,
    instructorEmail,
    feedback,
    enrolled,
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
        <td>{enrolled || 0}</td>
        <td>{status}</td>
        {!home && (
          <>
            <td>
              {admin ? (
                instructorName
              ) : (
                <Link
                  to={
                    feedback
                      ? "/dashboard/instructor/feedback"
                      : "/dashboard/instructor/my-classes"
                  }
                >
                  <span
                    onClick={() => setFeedbackOrId(feedback)}
                    className="btn btn-xs"
                  >
                    {"Feedback"}
                  </span>
                </Link>
              )}
            </td>
            <td className={`${admin && "hidden md:inline-block"}`}>
              {admin ? (
                instructorEmail
              ) : (
                <Link to="/dashboard/instructor/update-class">
                  <span
                    onClick={() => setFeedbackOrId(_id)}
                    className="btn btn-xs"
                  >
                    {"update"}
                  </span>
                </Link>
              )}
            </td>
          </>
        )}
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
