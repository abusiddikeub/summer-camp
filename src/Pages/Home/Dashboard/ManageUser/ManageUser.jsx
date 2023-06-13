import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const ManageUser = () => {

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

 const handleMakeAdmin=(user) =>{
  fetch(`http://localhost:5000/users/admin/${user._id}`,{
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
        title: `${user.name} is an Admin Now !!`,
        showConfirmButton: false,
        timer: 1500
      })
    }
  })

 }
 const handleInstructor=(user) =>{
  fetch(`http://localhost:5000/users/instructor/${user._id}`,{
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
        title: `${user.name} is an Instructor Now !!`,
        showConfirmButton: false,
        timer: 1500
      })
    }

    
  })

 }


  return (
    <div className="w-full">
      <Helmet>
        {" "}
        <title>Nirvana || Manage Users </title>
      </Helmet>
      <h3 className="text-center text-3xl font-semibold my-4">
        Total Users : {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll </th>
              <th>Action </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  
                {user.role === "admin" ? "admin" : 
                <button onClick={()=>handleMakeAdmin(user)}> </button>
                }
            
                  {user.role === "instructor" ? "instructor" : 
                <button onClick={()=>handleMakeAdmin(user)}>
                  
                  </button>
                }
               
                
                </td>
      
                <td>
              <button  onClick= {()=>handleInstructor(user) }   className="btn btn-outline btn-secondary"
                 >
                    Make Instructor
                  </button> 
              
                </td>
              
                <td>
                  {" "}
                  <button 
              
                  onClick={()=>handleMakeAdmin(user) } className="btn btn-outline btn-primary" 
                 >
                    Make Admin
                  </button>{" "}
                </td>
            
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
