import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../Routers/AuthProvider/AuthProvider';

const InstractorHook = () => {
               const {user} = useContext(AuthContext);

const { refetch, data:instructor = [] } = useQuery({
                             queryKey: ['instructor',user?.email],
                             queryFn: async()=>{
                     const res = await fetch(`http://localhost:5000/instructor?email=${user?.email}`,)
                     return res.json()
                     
                             },
})
return [instructor,refetch]
             
};

export default InstractorHook;