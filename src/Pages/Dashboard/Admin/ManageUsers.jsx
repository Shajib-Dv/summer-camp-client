/** @format */

import EmptyData from "../../../components/EmptyData";
import Heading from "../../../components/Heading";
import Loader from "../../../components/Loader";
import UseAllUser from "../../../hooks/UseAllUser";
import UserTable from "./UserTable";

const ManageUsers = () => {
  const [users, isLoading] = UseAllUser();
  return (
    <>
      <Heading
        title={"Make user admin or instructor"}
        subTitle={"Manage all users"}
      />
      {isLoading && <Loader />}
      {users && Array.isArray(users) && users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols z-0">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th className="hidden md:inline-flex">Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users?.map((user) => <UserTable key={user._id} user={user} />)}
            </tbody>
          </table>
        </div>
      ) : (
        !isLoading && (
          <EmptyData
            to={"/"}
            reason={"There is no user sign up yet "}
            message={"Go to boost your site"}
            go={"Back to home"}
          />
        )
      )}
    </>
  );
};

export default ManageUsers;
