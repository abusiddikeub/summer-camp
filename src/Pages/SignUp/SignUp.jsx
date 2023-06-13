import React, { useContext } from "react";
import { AuthContext } from "../../Routers/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import SocialLogin from "../Home/Home/SocialLogin/SocialLogin";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  //  hook form -----
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const users = {
            name: data.name,
            email: data.email,
            image: data.photoURL,
            role:"student"
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(users),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your SignUp successfully !!!",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });

          reset();
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Nirvana || SignUp</title>
      </Helmet>
      <div className="hero  min-h-screen bg-base-200">
        <div className=" hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">SignUp!</h1>
            {/* <img src={signInImage} alt="" /> */}
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="p-24 ">
              {errors.exampleRequired && <span></span>}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>

                <input
                  className="text-input border border-red-500 p-2 mt-4 "
                  {...register("name", { required: true })}
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  className="text-input border border-green-500 p-2 mt-4 "
                  {...register("email", { required: true })}
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-green-600">Email is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  className="text-input border border-purple-600 p-2 mt-4 "
                  {...register("photoURL")}
                  placeholder="photo Url"
                  type="url"
                />
                {errors.photoURL && (
                  <span className="text-red-600">photoURL is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  className="text-input border border-blue-500 p-2 mt-4 "
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$*])/,
                  })}
                  placeholder="password"
                  type="password"
                />

                {errors.password?.type === "required" && (
                  <p className="text-blue-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    Password Must be 6 character !!
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password Must be One Capital and one special character{" "}
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  className="text-input border border-blue-500 p-2 mt-4 "
                  {...register(" confirm password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  placeholder="Confirm password"
                  type="password"
                />
                {errors.password?.type === "required" && (
                  <p className="text-blue-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    Password Must be 6 character !!
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password Must be One Capital and one special character{" "}
                  </p>
                )}
              </div>
              <input
                className="mt-3 bg-purple-800 text-white p-2 w-1/2 hover:bg-orange-600 rounded-xl"
                value="Submit "
                type="submit"
              />
            </form>
            <div>
              <p className="text-center">Or Sign In with</p>
              <p className="text-center text-2xl">
                <small>
                  Already have an account{" "}
                  <Link to="/login" className="text-red-700">
                    Please Login
                  </Link>
                </small>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
