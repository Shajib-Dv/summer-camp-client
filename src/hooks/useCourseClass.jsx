/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCourseClass = () => {
  const { user, loader } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    data: classes = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["class"],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosSecure(`/classes?email=${user?.email}`);
      return res.data;
    },
  });
  return [classes, refetch, isLoading];
};

export default useCourseClass;
