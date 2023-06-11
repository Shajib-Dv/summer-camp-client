/** @format */

import EmptyData from "../../../components/EmptyData";
import Heading from "../../../components/Heading";
import Loader from "../../../components/Loader";
import useAllClass from "../../../hooks/useAllClass";
import useRole from "../../../hooks/useRole";
import ClassCard from "./ClassCard";

const AddedClasses = () => {
  const [allClasses, isLoading, refetch] = useAllClass();
  const [userRole] = useRole();
  const approvedClass = allClasses.filter((apr) => apr.status === "approve");
  return (
    <div className="pt-10">
      <Heading title={"Claim Your favorite class"} subTitle={"Hurry up !"} />

      {isLoading && <Loader />}

      {allClasses &&
      Array.isArray(approvedClass) &&
      approvedClass.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-20 mx-4 md:mx-10">
          {allClasses &&
            approvedClass?.map((singleClass) => (
              <ClassCard
                key={singleClass._id}
                classDetails={singleClass}
                userRole={userRole}
                refetch={refetch}
              />
            ))}
        </div>
      ) : (
        !isLoading && (
          <EmptyData
            to={"/"}
            go={"Home"}
            reason={"Class not Available"}
            message={"No Class Available right now ! go to home"}
          />
        )
      )}
    </div>
  );
};

export default AddedClasses;
