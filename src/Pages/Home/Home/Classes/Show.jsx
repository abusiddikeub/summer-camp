import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../Routers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useSelect from "../../../../Component/Hooks/UseSelectClass";

const Show = ({ item }) => {

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);


  const {name,image,instructorName,seats,price,_id} = item
  const { user } = useContext(AuthContext);
  const [,refetch] = useSelect();



  const handelClick = (item) => {
    functionOne();
    functionTwo();
    
    // if (user && user.email) {
    //   const selectItem = {item: _id,name,image,price,email : user.email}
    //   fetch("http://localhost:5000/select",{
    //     method:'POST',
    //     headers:{
    //       'content-type':'application/json'
    //     },
    //     body:JSON.stringify(selectItem)
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       if (data.insertedId) {
    //         refetch();
    //         Swal.fire({
    //           position: "top-end",
    //           icon: "success",
    //           title: "Your work has been select",
    //           showConfirmButton: false,
    //           timer: 1500,
    //         });
    //       }
    //     });
    // }
    // else{
    //   alert('you have not work')
    // }
  };

  const functionOne =(item) =>{
    if (user && user.email) {
      const selectItem = {item: _id,name,image,price,email : user.email}
      fetch("http://localhost:5000/select",{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(selectItem)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been select",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
    else{
      alert('you have not work')
    }
  }
  
  const functionTwo =() =>{
    setIsButtonDisabled(true);
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {name}</h2>
        <p>Instructor_Name : {instructorName}</p>
        <p>Availabe Seats : {seats}</p>
        <p>Price : {price}</p>
        <div className="card-actions">

          <button
  onClick={handelClick}
  disabled={isButtonDisabled}
            // onClick={() => handleAddToCart(item)}
            className="btn btn-primary"
            
          >
            Select{" "}
          </button>
        </div>
    
      </div>
  
    </div>
  );
};

export default Show;
