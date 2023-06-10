/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllClass = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: allClasses = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allClass"],
    queryFn: async () => {
      const res = await axiosSecure("/classes");
      return res.data;
    },
  });
  return [allClasses, isLoading, refetch];
};

export default useAllClass;
