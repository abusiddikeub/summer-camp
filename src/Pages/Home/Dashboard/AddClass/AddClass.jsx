
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddClass = () => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

const onSubmit = (data) => {
     console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,

    })
      .then((res) => res.json())
      .then((imgResponse) => {
        //  console.log(imgResponse);
         
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, seats,price,email,instructorName  } = data;
     
          const newItem = {
            name,
            price: parseFloat(price),
            seats,
            email,
            imgURL,
            instructorName
            
           
          };
      
          fetch('http://localhost:5000/instructor',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(newItem)
          })
          .then(res=> res.json())
          .then(result => {
            console.log(result)
            if(data.insertedId){
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
          console.log(data)
    
        }
      });
  };


  return (
    <div>
    <div>
      <h2 className="text-center text-3xl mb-8 border-y-4 w-96 mx-auto p-2">
        Add A Class
      </h2>
    </div>

    <form onSubmit={handleSubmit(onSubmit)} className="bg-purple-500 p-12">

      <div className="form-control w-full  ">
        <label className="label">
          <span className="label-text font-semibold">Class name*</span>
        </label>
        <input
          type="text"
          placeholder="Class Name"
          {...register("name", { required: true})}
          className="input input-bordered"
        />
      </div>

      <div className="form-control w-full  ">
        <label className="label">
          <span className="label-text font-semibold">Instructor name*</span>
        </label>
        <input
          type="text"
          placeholder="Instructor Name"
          {...register("instructorName", { required: true})}
          className="input input-bordered"
        />
      </div>
      <div className="form-control w-full  ">
        <label className="label">
          <span className="label-text font-semibold">Instructor Email*</span>
        </label>
        <input
          type="text"
          placeholder="Instructor Name"
          {...register("email", { required: true})}
          className="input input-bordered"
        />
      </div>
      <div className="flex ">
        
        <div className="form-control w-full ml-4 ">
          <label className="label">
            <span className="label-text font-semibold">Available Seats*</span>
          </label>
    
          <input
            type="number"
            placeholder="Available Seats "
            {...register("seats", { required: true })}
            className="input input-bordered w-full mr-3"
          />
        </div>
       
        <div className="form-control w-full ml-4 ">
          <label className="label">
            <span className="label-text font-semibold">Price*</span>
          </label>
          <input
            type="number"
            placeholder="$Price"
            {...register("price", { required: true })}
            className="input input-bordered w-full mr-3"
          />
        </div>
      </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Class Image *</span>
        </label>
        <input
          {...register("image", { required: true })}
          type="file"
          className="file-input file-input-bordered w-full "
        />
      </div>
      <input
        type="submit"
        value="Add Class"
        className="btn btn-outline btn-warning mt-4 text-center w-full"
      />
    </form>
  </div>
  );
};

export default AddClass;
