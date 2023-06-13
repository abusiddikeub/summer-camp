import React, { useContext } from "react";
import profile from "../../../assets/profile.png";
import { AuthContext } from "../../../Routers/AuthProvider/AuthProvider";

const ProfilePhoto = () => {
  const { user } = useContext(AuthContext);
  return (
    <img

      src={user && user.photoURL ? user.photoURL : profile}
      alt=""
      height="30px"
      width="30px"
      className="rounded-full"
    />
  );
};

export default ProfilePhoto;
