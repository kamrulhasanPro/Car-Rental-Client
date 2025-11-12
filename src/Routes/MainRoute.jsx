import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AllCars from "../Pages/AllCars/AllCars";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AuthLayout from "../Layouts/AuthLayout";
import CarDetails from "../Pages/CarDetails/CarDetails";
import PrivetRoute from "./PrivetRoute";
import MyBookings from "../Pages/MyBookings/MyBookings";
import AddCar from "../Pages/AddCar/AddCar";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/cars",
        Component: AllCars,
      },
      {
        path: '/cars/:id',
        element: (
          <PrivetRoute>
            <CarDetails/>
          </PrivetRoute>
        )
      },
      {
        path: '/my-bookings',
        element: (
          <PrivetRoute>
            <MyBookings/>
          </PrivetRoute>
        )
      },
      {
        path: '/add-car',
        element: (
          <PrivetRoute>
            <AddCar/>
          </PrivetRoute>
        )
      },
    ],
  },
  {
    // path: '/',
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Signup,
      },
    ],
  },
]);
