/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const UseAllUser = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      return res.data;
    },
  });
  return [users, isLoading, refetch];
};

export default UseAllUser;
