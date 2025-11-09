import React from "react";
import MyLink from "./MyLink";
import { Link, NavLink } from "react-router";
import MyContainer from "../MyContainer/MyContainer";

const Navbar = () => {
  const navList = (
    <>
      <MyLink to={"/"}>Home</MyLink>
      <MyLink to={"/cars"}>Cars</MyLink>
      <MyLink to={"/my-listing"}>My Listing</MyLink>
      <MyLink to={"/my-bookings"}>My Bookings</MyLink>
      <MyLink to={"/add-car"}>Add Car</MyLink>
    </>
  );
  return (
    <div className="bg-base-100/90 backdrop-blur-md shadow-sm z-50 sticky w-full top-16">
        <MyContainer className={'navbar'}>
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
          </div>
          <div className="flex items-end justify-center gap-2">
          <figure className="w-10 h-10 overflow-hidden">
            <img src="./Logo.png" alt="" />
          </figure>
            <p className="text-xl font-semibold hidden sm:inline"><span className="text-primary">Car</span> Rental</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal gap-6 px-1">{navList}</ul>
        </div>
        <div className="navbar-end">
          <Link className="my_btn">Login</Link>
        </div>
    </MyContainer>
      </div>
  );
};

export default Navbar;
