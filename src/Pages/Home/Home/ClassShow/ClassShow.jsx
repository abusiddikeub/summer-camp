import React from "react";

const ClassShow = ({ item }) => {
  const { image, price, name,seats } = item;
  return (
    <div className="flex space-x-2">
      <img
        style={{ border:'2px' }}
        src={image}
        alt=""
        className="w-[200px] rounded-xl"
      />
      <div>
        <h3 className="uppercase">{name}</h3>
        <p className="text-yellow-500">Price : {price}</p>
        <p className="text-green-500">Students : {seats}</p>
        
        <div>
        </div>
      </div>
    </div>
  );
};

export default ClassShow;
