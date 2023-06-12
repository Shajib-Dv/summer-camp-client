/** @format */

const InstructorCard = ({ info }) => {
  const { photo, email, name, role } = info;
  return (
    <>
      <div className="card card-compact primary-bg shadow-purple-500 shadow-2xl">
        <figure>
          <img src={photo} className="h-64 w-full object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title indicator">
            {name}
            <span className="indicator-item badge text-white badge-secondary left-0">
              {role}
            </span>
          </h2>
          <p className="font-semibold">Email :{email}</p>
        </div>
      </div>
    </>
  );
};

export default InstructorCard;