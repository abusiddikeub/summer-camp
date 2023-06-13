import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Routers/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  // private router ar jonno home page a pathay dite hba
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    googleSignIn()
    .then((result) => {
      const loggedInUser = result.user;
    
      const users = {name: loggedInUser.displayName, email: loggedInUser.email ,image:loggedInUser.photoURL}
      fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(users)
      })
      .then(res=> res.json())
      .then(() => {
         Navigate(from,{replace:true});
        
      })
    });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="w-full text-center my-4">
        <button onClick={handleGoogle} className="btn  btn-outline">
         <FaGoogle className="text-red-500 ml-1"></FaGoogle>
       Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
