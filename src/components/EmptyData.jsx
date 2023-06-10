/** @format */

import { Link } from "react-router-dom";

const EmptyData = ({ message, reason }) => {
  return (
    <div className="modal-box bg-[#8C9333] mx-auto">
      <h3 className="font-bold text-lg">{reason}</h3>
      <p className="py-4">{message}</p>
      <div className="modal-action justify-between">
        <Link to="/dashboard/instructor/add-class">
          <button className="btn hover:text-white">Add Class</button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyData;
