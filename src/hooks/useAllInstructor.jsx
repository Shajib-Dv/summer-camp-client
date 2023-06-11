/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useRole from "./useRole";

const useAllInstructor = (role) => {
  const [axiosSecure] = useAxiosSecure();
  const [userRole] = useRole();
  const {
    data: instructors = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["All-instructor"],
    queryFn: async () => {
      if (userRole === "admin" && !role) {
        const res = await axiosSecure("/instructors");
        return res.data;
      } else {
        const res = await axiosSecure("/instructors?role=instructor");
        return res.data;
      }
    },
  });
  return [instructors, refetch, isLoading];
};

export default useAllInstructor;
