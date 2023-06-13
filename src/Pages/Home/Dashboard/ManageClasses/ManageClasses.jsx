import React, { useContext, useState } from "react";
import InstractorHook from "../../../../Component/Hooks/InstractorHook";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../../Routers/AuthProvider/AuthProvider";

const ManageClasses = () => {
  const [instructor] = InstractorHook();

const {user} = useContext(AuthContext)
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://assignment-12-abusiddikeub.vercel.app/users");
    return res.json();
  });
   const handlePending=(item) =>{
  fetch(`https://assignment-12-abusiddikeub.vercel.app/users/pending/${item._id}`,{
    method:"PATCH"
  })
  .then(res =>res.json())
  .then(data =>{
    console.log(data)
    if(data.modifiedCount){
      refetch();
    
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${item.name} is an pending Now !!`,
        showConfirmButton: false,
        timer: 1500
      })
    }
  })

 }
 const handleApprove=(user) =>{
  fetch(`https://assignment-12-abusiddikeub.vercel.app/users/approve/${item._id}`,{
    method:"PATCH"
  })
  .then(res =>res.json())
  .then(data =>{
    console.log(data)
    if(data.modifiedCount){
      refetch();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${item.name} is an Approve Now !!`,
        showConfirmButton: false,
        timer: 1500
      })
    }

    
  })

 }

  return (
    <div>
      <h2 className="text-center text-2xl my-4">This is manage class : {instructor.length} </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
               #
              </th>
              <th>Class Name</th>
              <th>Instructor name</th>
              <th> Instructor Email</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>role</th>
              <th>Action</th>
              <th>Action</th>
              <th>Action</th>
              
              <th></th>
            </tr>
          </thead>

          <tbody>
           {instructor.map((item,index) =>  <tr key={item._id}>
              <td>{index+1}
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </div>
              </td>
              
              <td>
               {item.instructorName}
              </td>
              <td>{item.email}</td>
              <td>{item.seats}</td>
              <td className="text-center">{item.price}</td>
              <td>
                  
                {item.role === "pending" ? "pending" : 
                <button onClick={()=>handlePending(item)}> </button>
                }
            
                  {item.role === "approve" ? "approve" : 
                <button onClick={()=>handleApprove(item)}>
                  
                  </button>
                }
               
                
                </td>
              <td>
                <button 
                onClick= {()=>handlePending(item) }
                  className="btn btn-primary">pending</button>
              </td>
              <th>
                <button
                 onClick= {()=>handleApprove(item) }  
                 className="btn btn-secondary">Approve</button>
              </th>
              <th>
                <button className="btn btn-success">denied</button>
              </th>
            </tr>)}
</tbody>
        </table>
      </div>
    </div>
  );
};


export default ManageClasses;
