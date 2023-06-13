import React from "react";
import Show from "./Show";
import UseClassHooks from "../../../../Component/Hooks/UseClassHooks";


const Classes = () => {
  const [Classes] = UseClassHooks();

  return (
    <div className="grid md:grid-cols-3">
      {Classes.map((item) => (
        <Show key={item._id} item={item}
        ></Show>
      ))}
    </div>
  );
};

export default Classes;
