import React from "react";

const InstructorShow = ({ item }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl my-10 mb-24">
      <figure>
        <img
          src={item.imgURL}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Instructor_Name : {item.instructorName}</h2>
        <h2>Title : {item?.name}</h2>
        <p>Email : {item?.email}</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
  );
};

export default InstructorShow;
