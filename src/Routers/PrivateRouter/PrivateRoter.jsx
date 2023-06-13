import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation } from 'react-router-dom';

const PrivateRoter = () => {
               const { user, loading } = useContext(AuthContext);
               const location = useLocation();
               if (loading) {
                 return <progress className="progress w-56"></progress>;
               }
               if (user) {
                 return children;
               }
               return <Navigate state={{ from: location }}  to="/login" replace></Navigate>;
             };


export default PrivateRoter;