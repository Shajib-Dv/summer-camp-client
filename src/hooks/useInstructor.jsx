/** @format */

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
  const { user, loader } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: instructor = {}, refetch } = useQuery({
    queryKey: ["instructor"],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosSecure(`/instructors?email=${user?.email}`);
      return res.data;
    },
  });
  const isInstructor = instructor.email;
  return [isInstructor, refetch];
};

export default useInstructor;
