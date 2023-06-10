/** @format */

import useAuth from "../../hooks/useAuth";

const UserProfile = ({ role }) => {
  const { user } = useAuth();

  return (
    <>
      <div className="avatar w-full justify-center">
        <div className="w-1/2 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </div>
      <div className="relative">
        <h1 className="text-xl text-center font-bold">
          Welcome <span className="text-[#8C9333]">{user?.displayName}</span>
        </h1>
        <span className="badge badge-secondary absolute -top-3 right-0">
          {role}
        </span>
      </div>
      <p className="text-secondary text-center">{user?.email}</p>
    </>
  );
};

export default UserProfile;
