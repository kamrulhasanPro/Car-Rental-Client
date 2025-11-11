import React from "react";
import MyLink from "./MyLink";
import { Link, NavLink } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import useAuth from "../../Hooks/useAuth";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { GoPerson } from "react-icons/go";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDarkMode, MdOutlineSupportAgent } from "react-icons/md";
import { toast } from "react-toastify";



const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const handleLogout = () => {
    signOutUser()
    .then(() => toast.success('Logout Success'))
  }
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
    <div
      id="screen-top"
      className="bg-base-100/90 backdrop-blur-md shadow-sm z-50 sticky top-0 w-full"
    >
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal gap-6 px-1">{navList}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <CustomDropdown
              trigger={
                <figure className="w-11 h-11 rounded-full overflow-hidden">
                  <img src={user?.photoURL} alt="profile image" />
                </figure>
              }
              className={"right-0"}
              height={72}
            >
              <div className="bg-white p-3 rounded-xl">
                <div className="flex items-center gap-2">
                  <figure className="w-11 h-11 rounded-full overflow-hidden">
                    <img src={user?.photoURL} alt="profile image" />
                  </figure>
                  <div>
                    <h3 className="font-semibold">{user?.displayName}</h3>
                    <p className="text-sm text-gray-400">{user?.email}</p>
                  </div>
                </div>

                <div className="divider m-0"/>
                <div className="text-natural ">
                  <Link className="link_style"><GoPerson size={20}/> Profile</Link>
                  <Link className="link_style"><BiEdit size={20}/>Edit Profile</Link>
                  <Link className="link_style"><MdOutlineSupportAgent size={20} />Help Center</Link>
                  <Link className="link_style"><MdOutlineDarkMode size={20}/>Dark Mode</Link>

                  <button onClick={handleLogout} className="btn bg-red-400 hover:bg-red-600 btn-block text-white mt-4">Logout</button>
                </div>
              </div>
            </CustomDropdown>
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
