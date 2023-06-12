/** @format */

import EmptyData from "../../components/EmptyData";
import Heading from "../../components/Heading";
import Loader from "../../components/Loader";
import useAllInstructor from "../../hooks/useAllInstructor";
import InstructorCard from "./InstructorCard";

const AllInstructors = () => {
  const [instructors, , isLoading] = useAllInstructor(true);

  return (
    <div className="py-10">
      <Heading
        title={"Meet up your instructor"}
        subTitle={"Hero instructors"}
      />
      {isLoading && <Loader />}

      {instructors && Array.isArray(instructors) && instructors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-4 my-10">
          {instructors &&
            instructors?.map((info) => (
              <InstructorCard key={info._id} info={info} />
            ))}
        </div>
      ) : (
        !isLoading && (
          <EmptyData
            reason={"No instructor register yet !"}
            message={"Go back and apply for instructor"}
            go={"Home"}
            to={"/"}
          />
        )
      )}
    </div>
  );
};

export default AllInstructors;
