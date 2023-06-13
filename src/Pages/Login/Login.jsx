import React, { useContext } from "react";
import { FaFacebookF, FaGofore, FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Routers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import SocialLogin from "../Home/Home/SocialLogin/SocialLogin";


const Login = () => {
  const { signIn } = useContext(AuthContext);

  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Login successfully !!!",
          showConfirmButton: false,
          timer: 1500,
        });
        Navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });

  };
  return (
  <>
      <Helmet>
      <title>Nirvana || Login</title>
    </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          {/* <img src={img} alt="" /> */}
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center text-orange-600">
              Login
            </h1>

            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn bg-[#FF3811]"
                />
              </div>
            </form>
          
            <div>
              <h6 className="text-center">
                Have an account?{" "}
                <Link to="/signUp" className="text-red-500 font-semibold">
                  Sign Up
                </Link>{" "}
              </h6>
            </div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Login;
