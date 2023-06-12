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
import AddedClasses from "../Pages/Home/AddedClasses/AddedClasses";
import PrivateRoute from "./PrivateRoute";
import MySelectedClass from "../Pages/Dashboard/Student/MySelectedClass";
import Payment from "../Pages/Dashboard/Student/Payment/Payment";
import EnrolledClasses from "../Pages/Dashboard/Student/EnrolledClasses";
import PaymentHistory from "../Pages/Dashboard/Student/PaymentHistory";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import Feedback from "../Pages/Dashboard/Isntructor/Feedback";
import UpdateClass from "../Pages/Dashboard/Isntructor/UpdateClass";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/classes", element: <AddedClasses /> },
      { path: "/instructors", element: <AllInstructors /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          { path: "/dashboard", element: "" },
          //admin route
          {
            path: "/dashboard/admin/home",
            element: (
              <AdminRoute>
                <AdminHome />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/admin/manage-class",
            element: (
              <AdminRoute>
                <ManageClass />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/admin/manage-user",
            element: (
              <AdminRoute>
                <ManageUsers />
              </AdminRoute>
            ),
          },
          // instructor route
          {
            path: "/dashboard/instructor/home",
            element: (
              <InstructorRoute>
                <InstructorHome />
              </InstructorRoute>
            ),
          },
          {
            path: "/dashboard/instructor/add-class",
            element: (
              <InstructorRoute>
                <AddClass />
              </InstructorRoute>
            ),
          },
          {
            path: "/dashboard/instructor/my-classes",
            element: (
              <InstructorRoute>
                <MyClasses />
              </InstructorRoute>
            ),
          },
          {
            path: "/dashboard/instructor/feedback",
            element: (
              <InstructorRoute>
                <Feedback />
              </InstructorRoute>
            ),
          },
          {
            path: "/dashboard/instructor/update-class",
            element: (
              <InstructorRoute>
                <UpdateClass />
              </InstructorRoute>
            ),
          },

          //student route
          {
            path: "/dashboard/student/home",
            element: (
              <StudentRoute>
                <MySelectedClass />
              </StudentRoute>
            ),
          },
          {
            path: "/dashboard/student/payment",
            element: (
              <StudentRoute>
                <Payment />
              </StudentRoute>
            ),
          },
          {
            path: "/dashboard/student/my-enrolled",
            element: (
              <StudentRoute>
                <EnrolledClasses />
              </StudentRoute>
            ),
          },
          {
            path: "/dashboard/student/my-pay-history",
            element: (
              <StudentRoute>
                <PaymentHistory />
              </StudentRoute>
            ),
          },
        ],
      },
    ],
  },

  { path: "*", element: <Page404 /> },
]);

export default router;
