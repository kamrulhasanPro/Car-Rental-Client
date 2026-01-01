import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/User/Home/Home";
import AllCars from "../Pages/User/AllCars/AllCars";
import Login from "../Pages/Auth/Login/Login";
import Signup from "../Pages/Auth/Signup/Signup";
import AuthLayout from "../Layouts/AuthLayout";
import CarDetails from "../Pages/User/CarDetails/CarDetails";
import PrivetRoute from "./PrivetRoute";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import AddCar from "../Pages/Dashboard/AddCar/AddCar";
import MyListings from "../Pages/Dashboard/MyListings/MyListings";
import NotFoundPageLayout from "../Layouts/NotFoundPageLayout";
import TermsCondition from "../Pages/User/Terms&Condition/TermsCondition";
import About from "../Pages/User/About/About";
import Contact from "../Pages/User/Contact/Contact";

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
        path: '/about',
        Component: About
      },
      {
        path: '/contact',
        Component: Contact
      },
      {
        path: "/cars/:id",
        element: <CarDetails />,
      },
      {
        path: "/my-bookings",
        element: (
          <PrivetRoute>
            <MyBookings />
          </PrivetRoute>
        ),
      },
      {
        path: "/add-car",
        element: (
          <PrivetRoute>
            <AddCar />
          </PrivetRoute>
        ),
      },
      {
        path: "/my-listings",
        element: (
          <PrivetRoute>
            <MyListings />
          </PrivetRoute>
        ),
      },
      {
        path: "/terms-and-condition",
        Component: TermsCondition,
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
  {
    path: "/*",
    Component: NotFoundPageLayout,
  },
]);
