import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaHome,
  FaHouseUser,
  FaIdBadge,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";
import { motion } from "framer-motion"
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../../Component/Hooks/useAdmin";
import UseInstructor from "../../../Component/UseInstructor";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = UseInstructor();
  // const isInstructor = false;
  const isStudent = true;

  return (
    <>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center ">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {isAdmin ? (
              <>
                <motion.div animate={{scale:2}} className="text-center text-purple-500  font-bold mt-6">
                  Admin Dashboard
                </motion.div>
                <div className="divider"></div>
                <li>
                  <Link to="/">
                    <FaHome></FaHome>Home
                  </Link>
                </li>
                <li>
                  <NavLink to="/dashboard/manageClasses">
                    <FaHouseUser></FaHouseUser> Manege Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUser">
                    {" "}
                    <FaIdBadge></FaIdBadge>Manage Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {isInstructor ? (
                  <>
                    <motion.div animate={{scale:2}} className="text-center mt-6 text-red-400 font-bold ">
                      Instructor Dashboard
                    </motion.div>

                    <div className="divider"></div>

                    <li>
                      <Link to="/">
                        <FaHome></FaHome>Home
                      </Link>
                    </li>

                    <li>
                      <NavLink
                        className="hover:text-red-600"
                        to="/dashboard/addClass"
                      >
                        {" "}
                        <FaUser></FaUser>Add a Class
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="hover:text-orange-600 "
                        to="/dashboard/myClasses"
                      >
                        {" "}
                        <FaUserAlt></FaUserAlt>My Classes
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <motion.div animate={{scale:2}}
                    
                 className="text-center text-blue-400  font-bold mt-6">
                      Student Dashboard
                    </motion.div>

                    <div className="divider"></div>
                    <li>
                      <Link to="/">
                        <FaHome></FaHome>Home
                      </Link>
                    </li>
                    <li>
                      <NavLink to="/dashboard/mySelectedClass">
                        <FaHome></FaHome>My Selected Classes
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dash-board/enrolled-classes">
                        <FaArrowRight></FaArrowRight>Enrolled Classes
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dash-board/payment-history">
                        payment History
                      </NavLink>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
