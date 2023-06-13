import React, { useEffect, useState } from "react";
import useSelect from "../../../../Component/Hooks/UseSelectClass";
import Swal from "sweetalert2";
import UseClassHooks from "../../../../Component/Hooks/UseClassHooks";

const MyClass = () => {
const [classes] = UseClassHooks();
  return (
    <div>
      <h2 className="text-3xl my-4 text-center">This is my class : </h2>
      <div className="divider w-1/2 mx-auto"></div>

      <div>
     
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
               #
              </th>
              <th>Class Name</th>
              <th> Instructor Email</th>
              <th>pending</th>
              <th>action</th>
              <th>action</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
           {classes.map((item,index) =>  <tr key={item._id}>
              <td>{index+1}
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                              <img src={Image} alt="" />
                    <div className="font-bold">{item.name}</div>
                  </div>
                </div>
              </td>
              <td>{item.email}</td>
              <th>
                <button className="btn btn-ghost btn-xs bg-red-700 text-white">pending</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs bg-green-700 text-white">Pay</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs bg-green-700 text-white">deny</button>
              </th>
             
            </tr>)}
</tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default MyClass;
