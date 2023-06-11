/** @format */

import EmptyData from "../../../components/EmptyData";
import Heading from "../../../components/Heading";
import Loader from "../../../components/Loader";
import useAllInstructor from "../../../hooks/useAllInstructor";
import UserTable from "./UserTable";

const AdminHome = () => {
  const [instructors, refetch, isLoading] = useAllInstructor();
  return (
    <>
      <Heading
        title={"Choose your instructors"}
        subTitle={"Instructor request"}
      />
      {isLoading && <Loader />}
      {instructors && Array.isArray(instructors) && instructors.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols z-0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {instructors &&
                instructors?.map((instructor) => (
                  <UserTable
                    user={instructor}
                    key={instructor._id}
                    request={true}
                    refetch={refetch}
                  />
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        !isLoading && (
          <EmptyData
            to={"/dashboard/admin/manage-user"}
            go={"Manage user"}
            reason={"Nobody requested yet"}
            message={
              "Go to manage user and admit someone for admin/instructor role"
            }
          />
        )
      )}
    </>
  );
};

export default AdminHome;
