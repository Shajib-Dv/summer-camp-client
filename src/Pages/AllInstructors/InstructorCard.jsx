/** @format */

const InstructorCard = ({ info, isPopular }) => {
  const { photo, email, name, role } = info;
  return (
    <>
      <div className="card card-compact primary-bg shadow-purple-500 shadow-2xl">
        <figure>
          <img
            src={photo}
            className={`h-64 w-full object-cover object-top ${
              isPopular && "mask mask-circle"
            }`}
          />
        </figure>
        <div className="card-body">
          <div className="relative w-fit">
            <h2 className="card-title">{name}</h2>
            <span className=" badge text-white absolute -right-20 -top-2">
              {isPopular ? "popular" : role}
            </span>
          </div>
          <p className="font-semibold">Email :{email}</p>
        </div>
      </div>
    </>
  );
};

export default InstructorCard;
