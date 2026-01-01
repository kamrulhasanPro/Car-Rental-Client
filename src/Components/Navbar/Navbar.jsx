import React from "react";
import MyLink from "./MyLink";
import { Link } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import useAuth from "../../Hooks/useAuth";
import Profile from "./Profile";

const Navbar = () => {
  const { user } = useAuth();
  const navList = (
    <>
      <MyLink to={"/"}>Home</MyLink>
      <MyLink to={"/cars"}>Cars</MyLink>
      <MyLink to={"/about"}>About</MyLink>
      <MyLink to={"/contact"}>Contact</MyLink>
      {/* {user && (
        <>
          <MyLink to={"/my-listings"}>My Listings</MyLink>
          <MyLink to={"/my-bookings"}>My Bookings</MyLink>
          <MyLink to={"/add-car"}>Add Car</MyLink>
        </>
      )} */}
    </>
  );
  return (
    <div className="bg-base-100/90 backdrop-blur-md shadow-sm z-50 sticky top-0 w-full">
      <MyContainer className={"navbar"}>
        <div className="navbar-start gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {navList}
            </ul>

            {/* logo */}
          </div>
          <Link to={"/"} className="flex items-end justify-center gap-2">
            <figure className="w-10 h-10 overflow-hidden">
              <img src="./Logo.png" alt="" />
            </figure>
            <p className="text-xl font-semibold hidden sm:inline">
              <span className="text-primary">Car</span> Rental
            </p>
          </Link>
        </div>

        {/* custom dropdown for profile */}
        <div className="navbar-end">
          <ul className="menu-horizontal gap-6 px-1 mr-4">{navList}</ul>
          {user ? (
            <Profile />
          ) : (
            <Link to={"/login"} className="my_btn">
              Login
            </Link>
          )}
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
