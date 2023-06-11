/** @format */

import { useQuery } from "@tanstack/react-query";
import Heading from "../../../components/Heading";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import StudentClassTable from "./StudentClassTable";
import Loader from "../../../components/Loader";
import EmptyData from "../../../components/EmptyData";

const EnrolledClasses = ({ historyOn }) => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loader } = useAuth();

  const { data: enrolledClass = [], isLoading } = useQuery({
    queryKey: ["paidClass"],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosSecure(`/payment/${user?.email}`);
      return res.data;
    },
  });

  const totalAmount = enrolledClass?.reduce((sum, item) => item.price + sum, 0);

  return (
    <>
      {historyOn ? (
        ""
      ) : (
        <Heading subTitle={"Enrolled classes"} title={"Your Classes"} />
      )}

      {isLoading && <Loader />}
      {enrolledClass &&
      Array.isArray(enrolledClass) &&
      enrolledClass.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols z-0">
            <thead>
              <tr>
                <th>Image</th>
                <th>Date</th>
                <th>Price</th>
                <th>transactionId</th>
              </tr>
            </thead>
            <tbody>
              {enrolledClass &&
                enrolledClass?.map((classInfo) => (
                  <StudentClassTable
                    key={classInfo._id}
                    classInfo={classInfo}
                    readOnly={true}
                  />
                ))}
            </tbody>
            {historyOn && (
              <tfoot>
                <tr>
                  <th></th>
                  <th></th>
                  <th>
                    Total =
                    <span className="text-black font-semibold">
                      ${totalAmount}
                    </span>
                  </th>
                  <th></th>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      ) : (
        !isLoading && (
          <EmptyData
            to={"/dashboard/student/my-classes"}
            go={"Enroll now"}
            reason={"No class enrolled yet !"}
            message={
              "Please go to your selected class and pay to enroll course."
            }
          />
        )
      )}
    </>
  );
};

export default EnrolledClasses;
