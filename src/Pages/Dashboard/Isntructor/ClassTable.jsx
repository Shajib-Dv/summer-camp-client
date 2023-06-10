/** @format */

const ClassTable = ({ classDetail }) => {
  const {
    classImage,
    className: name,
    availableSeats,
    price,
    status,
  } = classDetail;
  return (
    <>
      <tr>
        <td className="hidden md:inline-block">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={classImage} />
              </div>
            </div>
          </div>
        </td>
        <td className="hidden md:inline-block">{name}</td>
        <td>{availableSeats}</td>
        <th className="hidden md:inline-block">{price}</th>
        <th>{0}</th>
        <th>
          <span className="btn btn-xs">{status}</span>
        </th>
        <th>
          <span className="btn btn-xs">{"Feedback"}</span>
        </th>
        <th>
          <span className="btn btn-xs">{"update"}</span>
        </th>
      </tr>
    </>
  );
};

export default ClassTable;
