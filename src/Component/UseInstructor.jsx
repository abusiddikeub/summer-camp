import { useContext } from "react";
import { AuthContext } from "../Routers/AuthProvider/AuthProvider";
import UseAxiosSecure from "./Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const UseInstructor = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = UseAxiosSecure()
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users/instructor/${user?.email}`);
        console.log('responsive',res )
      return res.data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading];
};

export default UseInstructor;
