/** @format */

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: instructor = {}, refetch } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await axiosSecure(`/instructors?email=${user?.email}`);
      return res.data;
    },
  });
  return [instructor, refetch];
};

export default useInstructor;
