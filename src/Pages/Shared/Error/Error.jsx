import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div class="error text-center md:grid-cols-12">
      <h2 className="">O0pps ! Page not found</h2>
      <h1 className="">404</h1>
      <p className="">We can't find the page you're looking for .</p>
      <Link className="btn bg-red-500 mt-4  p-2 rounded" to="/">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
