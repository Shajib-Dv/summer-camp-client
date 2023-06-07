/** @format */

const UserProfile = () => {
  const user = { name: "Abul", email: "ad@b.com" };
  return (
    <>
      <div
        title={user?.displayName || "Name not added"}
        className="avatar placeholder"
      >
        <div className="w-16 mask mask-decagon">
          {user?.photoURL ? (
            <img src={user?.photoURL} />
          ) : (
            <div className="text-3xl text-black font-bold rounded-full w-full h-full flex justify-center items-center bg-[#e8dc3eb3]">
              {user?.email.slice(0, 1)}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
