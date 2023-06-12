/** @format */

import Heading from "../../components/Heading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ClassCard from "./AddedClasses/ClassCard";
import Loader from "../../components/Loader";

const PopularClass = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: PopularClasses = [], isLoading } = useQuery({
    queryKey: ["stateData"],
    queryFn: async () => {
      const res = await axiosSecure(`/classes?limit=${6}`);
      return res.data;
    },
  });

  return (
    <div className="my-10">
      <Heading title={"Popular Classes"} subTitle={"Explore this weak"} />

      {isLoading && <Loader />}

      {PopularClasses &&
        Array.isArray(PopularClasses) &&
        PopularClasses.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-20 mx-4 md:mx-10">
            {PopularClasses &&
              PopularClasses?.map((singleClass) => (
                <ClassCard
                  key={singleClass._id}
                  classDetails={singleClass}
                  isEnrolled={true}
                />
              ))}
          </div>
        )}
    </div>
  );
};

export default PopularClass;
