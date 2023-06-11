/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useRole from "./useRole";

const UseAllUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const [userRole] = useRole();
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      if (userRole === "admin") {
        const res = await axiosSecure("/users");
        return res.data;
      }
    },
  });
  return [users, isLoading, refetch];
};

export default UseAllUser;
