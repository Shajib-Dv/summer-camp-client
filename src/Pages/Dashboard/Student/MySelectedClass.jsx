/** @format */

import { useQuery } from "@tanstack/react-query";
import Heading from "../../../components/Heading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import StudentClassTable from "./StudentClassTable";

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
    </>
  );
};

export default MySelectedClass;
