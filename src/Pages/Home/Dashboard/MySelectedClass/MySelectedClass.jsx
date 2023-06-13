import React from "react";
import useSelect from "../../../../Component/Hooks/UseSelectClass";
import Swal from "sweetalert2";


const MySelectedClass = () => {
  const [select,refetch] = useSelect();

  const handleDelete = item =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
      // delete korer option --------------
      fetch(`http://localhost:5000/select/${item._id}`,{
        method:'DELETE',
      })
      .then(res=>res.json())
      .then(data =>{
        if(data.deletedCount > 0){
          refetch();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

      }
    })
  }
  return (
    <div>
    <h2 className="text-3xl my-4 text-center">This is my class : {select.length}</h2>
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
            <th>Price</th>
            <th>Delete</th>
            <th>Pay Button</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
         {select.map((item,index) =>  <tr key={item._id}>
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
            <td className="text-center">{item.price}</td>
            <th>
              <button  onClick={()=>handleDelete(item)} className="btn btn-ghost btn-xs bg-red-700 text-white">Delete</button>
            </th>
            <th>
              <button className="btn btn-ghost btn-xs bg-green-700 text-white">Pay</button>
            </th>
           
          </tr>)}
</tbody>
      </table>
    </div>
  </div>
  </div>
  );
};

export default MySelectedClass;
