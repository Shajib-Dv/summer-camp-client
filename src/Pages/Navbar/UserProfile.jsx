/** @format */

import useAuth from "../../hooks/useAuth";
import logo from "/user.png";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <>
      <div
        title={user?.displayName || "Name not added"}
        className="avatar placeholder"
      >
        <div className="w-16 mask mask-decagon">
          <img src={user?.photoURL ? user?.photoURL : logo} />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
