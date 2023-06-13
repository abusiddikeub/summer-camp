
import { useContext } from 'react';
import { AuthContext } from '../../Routers/AuthProvider/AuthProvider';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from 'react-query';


const UseStudent = () => {
               const { user,loading } = useContext(AuthContext);
               const [axiosSecure] = UseAxiosSecure()
               const { data: isStudent, isLoading: isStudentLoading } = useQuery({
                 queryKey: ["isStudent", user?.email],
                 enabled:!loading,
                 queryFn: async () => {
                   const res = await axiosSecure.get(
                     `/users/student/${user?.email}`);
                     console.log('resposive',res )
                   return res.data.admin;
                 },
               });
               return [isStudent, isStudentLoading];
};

export default UseStudent;