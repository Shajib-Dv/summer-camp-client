/** @format */

import EmptyData from "../../../components/EmptyData";
import Heading from "../../../components/Heading";
import Loader from "../../../components/Loader";
import useCourseClass from "../../../hooks/useCourseClass";
import ClassTable from "./ClassTable";

const MyClasses = () => {
  const [classes, refetch, isLoading] = useCourseClass();
  return (
    <>
      <Heading
        title={"Manage your class"}
        subTitle={"All classes you have added"}
      />
      {isLoading && <Loader />}
      {classes && Array.isArray(classes) && classes.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols z-0">
            <thead>
              <tr>
                <th className="hidden md:inline-block">Image</th>
                <th className="hidden md:inline-block pl-10">Name</th>
                <th>Seats</th>
                <th className="hidden md:inline-block">Price</th>
                <th>Enrolled</th>
                <th>Status</th>
                <th>Feedback </th>
                <th>Update </th>
              </tr>
            </thead>
            <tbody>
              {classes &&
                classes?.map((classDetail) => (
                  <ClassTable key={classDetail._id} classDetail={classDetail} />
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        !isLoading && (
          <EmptyData
            reason={"You haven't any class yet !"}
            message={"Please click to add class button to add your won class"}
          />
        )
      )}
    </>
  );
};

export default MyClasses;
