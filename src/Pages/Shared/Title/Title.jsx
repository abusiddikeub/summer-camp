import React from "react";

const Title = ({ title, subTitle }) => {
  return (
    <div className="">
      <p className="text-3xl font-semibold uppercase border-y-4 py-4 md:w-4/12 mx-auto text-center ">{title}</p>
      <h3 className="text-2xl ">{subTitle}</h3>
    </div>
  );
};

export default Title;
