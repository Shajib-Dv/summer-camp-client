/** @format */

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Page404 from "../components/Page404";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Dashboard from "../Layout/Dashboard";
import InstructorHome from "../Pages/Dashboard/Isntructor/InstructorHome";
import AddClass from "../Pages/Dashboard/Isntructor/AddClass";
import MyClasses from "../Pages/Dashboard/Isntructor/MyClasses";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import ManageClass from "../Pages/Dashboard/Admin/ManageClass";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          { path: "/dashboard", element: "" },
          //admin route
          {
            path: "/dashboard/admin/home",
            element: <AdminHome />,
          },
          { path: "/dashboard/admin/manage-class", element: <ManageClass /> },
          { path: "/dashboard/admin/manage-user", element: <ManageUsers /> },
          // instructor route
          {
            path: "/dashboard/instructor/home",
            element: <InstructorHome />,
          },
          {
            path: "/dashboard/instructor/add-class",
            element: <AddClass />,
          },
          {
            path: "/dashboard/instructor/my-classes",
            element: <MyClasses />,
          },
        ],
      },
    ],
  },

  { path: "*", element: <Page404 /> },
]);

export default router;
