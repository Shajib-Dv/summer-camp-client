/** @format */

import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="avatar w-full justify-center">
        <div className="w-1/2 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </div>
      <h1 className="text-xl text-center font-bold">
        Welcome <span className="text-[#8C9333]">{user?.displayName}</span>
      </h1>
    </>
  );
};

export default UserProfile;
