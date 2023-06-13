import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Shared/Error/Error";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Home/Dashboard/Dashboard";
import AddClass from "../Pages/Home/Dashboard/AddClass/AddClass";
import ManageUser from "../Pages/Home/Dashboard/ManageUser/ManageUser";
import ManageClasses from "../Pages/Home/Dashboard/ManageClasses/ManageClasses";
import Classes from "../Pages/Home/Home/Classes/Classes";
import UserHome from "../Pages/Home/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Home/Dashboard/AdminHome/AdminHome";
import Instructor from "../Pages/Home/Home/Instructor/Instructor";
import MySelectedClass from "../Pages/Home/Dashboard/MySelectedClass/MySelectedClass";
import InstructorHome from "../Pages/Home/Dashboard/Instructor/InstructorHome";
import MyClass from "../Pages/Home/Dashboard/MyClass/MyClass";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
  
    {
      path:'instructor',
      element:<Instructor></Instructor>,
    
    },
      {
        path:'classes',
        element:<Classes></Classes>
      },
      {
               path:'signUp',
               element:<SignUp></SignUp>
      },
      {
               path:'login',
               element:<Login></Login>
      }
    ],
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
  
      {
        path:"InstructorHome",
        element:<InstructorHome></InstructorHome>
      },
      {
        path:'addClass',
        element:<AddClass></AddClass>

      },
      {
        path:'myClasses',
        element:<MyClass></MyClass>

      },
      // admin 
      {
        path:"adminHome",
        element:<AdminHome></AdminHome>
      },
      {
        path:'manageClasses',
        element:<ManageClasses></ManageClasses>
      },
      {
        path:'manageUser',
        element:<ManageUser></ManageUser>
      },

      // student 
      {
        path:'userHome',
        element:<UserHome></UserHome>
      },
      {
        path:'mySelectedClass',
        element:<MySelectedClass></MySelectedClass>
      }
    ]
  },
  {
               path:'*',
               element:<Error></Error>
  }
]);
export default router;
