/** @format */

import { useQuery } from "@tanstack/react-query";
import Heading from "../../components/Heading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import InstructorCard from "../AllInstructors/InstructorCard";
import Loader from "../../components/Loader";

const PopularInstructor = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: PopularInstructors = [], isLoading } = useQuery({
    queryKey: ["InstructorData"],
    queryFn: async () => {
      const res = await axiosSecure(`/instructors?limit=${6}`);
      return res.data;
    },
  });

  return (
    <div className="my-10">
      <Heading title={"Popular Instructors"} subTitle={"Explore this weak"} />

      {isLoading && <Loader />}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:mx-10 mx-4 my-10">
        {PopularInstructors &&
          PopularInstructors?.map((info) => (
            <InstructorCard key={info._id} info={info} isPopular={true} />
          ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
