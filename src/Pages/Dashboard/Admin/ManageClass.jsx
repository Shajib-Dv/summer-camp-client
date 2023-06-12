/** @format */

import { useState } from "react";
import EmptyData from "../../../components/EmptyData";
import Heading from "../../../components/Heading";
import Loader from "../../../components/Loader";
import useAllClass from "../../../hooks/useAllClass";
import FeedbackModal from "../../Shared/SocialLogIn/Modal/FeedbackModal";
import ClassTable from "../Isntructor/ClassTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const ManageClass = () => {
  const [allClasses, isLoading, refetch] = useAllClass();
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [denyId, setDenyId] = useState("");
  const [axiosSecure] = useAxiosSecure();

  //modal
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSendFeedback = async (feedback) => {
    const status = { status: "denied", feedback: feedback };
    const res = await axiosSecure.put(`/classes/${denyId}`, status);
    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Feedback successfully send",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleDeny = (id) => {
    setDenyId(id);
  };

  return (
    <>
      <Helmet>
        <title>Hero Sports | manage classes</title>
      </Helmet>
      <Heading
        title={"Approve or Denied Class"}
        subTitle={"Manage all classes"}
      />

      {isLoading && <Loader />}
      {user &&
      allClasses &&
      Array.isArray(allClasses) &&
      allClasses.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols z-0">
            <thead>
              <tr>
                <th className="hidden md:inline-block">Image</th>
                <th className="hidden md:inline-block pl-10">Name</th>
                <th>Seats</th>
                <th className="hidden md:inline-block">Price</th>
                <th>Enrolled</th>
                <th>Status</th>
                <th>Instructor </th>
                <th className="hidden md:inline-block">Email</th>
                <th>Approve</th>
                <th>Deny</th>
              </tr>
            </thead>
            <tbody>
              {allClasses &&
                allClasses?.map((classDetail) => (
                  <ClassTable
                    key={classDetail._id}
                    classDetail={classDetail}
                    admin={true}
                    approve={true}
                    deny={true}
                    handleOpenModal={handleOpenModal}
                    handleDeny={handleDeny}
                    refetch={refetch}
                  />
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        !isLoading && (
          <EmptyData
            to="/dashboard/admin/manage-user"
            reason={"There is no class to show !"}
            message={"Please go to manage user so people add their classes"}
            go={"Manage user"}
          />
        )
      )}
      {showModal && (
        <FeedbackModal
          isOpen={showModal}
          isClose={handleCloseModal}
          handleSendFeedback={handleSendFeedback}
        />
      )}
    </>
  );
};

export default ManageClass;
