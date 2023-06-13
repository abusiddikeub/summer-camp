import { useContext } from "react";
import { AuthContext } from "../../Routers/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";



const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = UseAxiosSecure()
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users/admin/${user?.email}`);
        console.log('resposive',res )
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
