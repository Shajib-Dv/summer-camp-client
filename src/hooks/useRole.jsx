/** @format */

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loader } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const {
    data: userRole = "",
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["userRole"],
    enabled: !loader,
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure(`/users/${user?.email}`);
        return res.data?.role;
      }
    },
  });
  return [userRole, refetch, isLoading];
};

export default useRole;
