/** @format */

import { useQuery } from "@tanstack/react-query";
import Heading from "../../../components/Heading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import StudentClassTable from "./StudentClassTable";
import EmptyData from "../../../components/EmptyData";
import Loader from "../../../components/Loader";

const MySelectedClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: selectedClass = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["selectedData"],
    queryFn: async () => {
      const res = await axiosSecure(`/enrolled?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <>
      <Heading
        title={"Complete payment for confirm"}
        subTitle={"Revisit class"}
      />

      {isLoading && <Loader />}

      {selectedClass &&
      Array.isArray(selectedClass) &&
      selectedClass.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols z-0">
            <thead>
              <tr>
                <th>Image</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {selectedClass &&
                selectedClass?.map((classInfo) => (
                  <StudentClassTable
                    key={classInfo._id}
                    classInfo={classInfo}
                    refetch={refetch}
                  />
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        !isLoading && (
          <EmptyData
            to={"/classes"}
            go={"Enroll Now"}
            reason={"You haven't select any class yet !"}
            message={"Please click to enroll now for enroll classes"}
          />
        )
      )}
    </>
  );
};

export default MySelectedClass;
