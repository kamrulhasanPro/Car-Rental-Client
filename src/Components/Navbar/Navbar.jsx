import React from "react";
import MyLink from "./MyLink";
import { Link } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import useAuth from "../../Hooks/useAuth";
import Profile from "./Profile";
import { RiMenu2Fill } from "react-icons/ri";

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

          {/* mobile sidebar */}
          <div className="dropdown">
            <div className="drawer md:hidden">
              <input
                id="my-drawer-1"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-1"
                  className="flex items-center justify-center px-2 cursor-pointer py-2 text-lg"
                >
                  <RiMenu2Fill />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-1"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                  {/* Sidebar content here */}
                  {navList}
                </ul>
              </div>
            </div>
          </div>

          {/* logo */}
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
          <ul className="menu-horizontal gap-6 px-1 mr-4 hidden md:flex">
            {navList}
          </ul>
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
