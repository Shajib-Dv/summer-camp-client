/** @format */

import { Helmet } from "react-helmet-async";
import EmptyData from "../../../components/EmptyData";
import Heading from "../../../components/Heading";
import Loader from "../../../components/Loader";
import useCourseClass from "../../../hooks/useCourseClass";
import ClassTable from "./ClassTable";

const MyClasses = ({ home }) => {
  const [classes, refetch, isLoading] = useCourseClass();
  return (
    <>
      <Helmet>
        <title>Hero Sports | my classes</title>
      </Helmet>
      {!home && (
        <Heading
          title={"Manage your class"}
          subTitle={"All classes you have added"}
        />
      )}
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
                {!home && (
                  <>
                    <th>Feedback </th>
                    <th>Update </th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {classes &&
                classes?.map((classDetail) => (
                  <ClassTable
                    key={classDetail._id}
                    classDetail={classDetail}
                    home={home}
                  />
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        !isLoading && (
          <EmptyData
            to={"/dashboard/instructor/add-class"}
            reason={"You haven't any class yet !"}
            message={"Please click to add class button to add your won class"}
            go={"Add class"}
          />
        )
      )}
    </>
  );
};

export default MyClasses;
