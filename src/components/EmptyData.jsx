/** @format */

import { Link } from "react-router-dom";

const EmptyData = ({ message, reason, to, go }) => {
  return (
    <div className="modal-box primary-bg mx-auto">
      <h3 className="font-bold text-lg">{reason}</h3>
      <p className="py-4">{message}</p>
      <div className="modal-action justify-between">
        <Link to={to}>
          <button className="btn hover:text-white">{go}</button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyData;
