import React from "react";
import { Outlet } from "react-router";
import Logo from "../Components/Logo/Logo";
import {
  MdAddCircleOutline,
  MdDirectionsCar,
  MdLogout,
  MdMenuOpen,
  MdOutlineCarRental,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import SidebarMenuItem from "../Components/Dashboard/Sidebar/SidebarMenuItem";
import { FiHome } from "react-icons/fi";

const DashboardLayout = () => {
  return (
    <section>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <div className="navbar bg-base-100 shadow-sm px-4">
            <div className="flex-1">
              <Logo />
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />{" "}
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Page content here */}
          <div className="p-4">
            <Outlet />
          </div>
        </div>

        <aside className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-center justify-between bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <ul className="menu w-full grow">
              <li>
                <label
                  htmlFor="my-drawer-4"
                  aria-label="open sidebar"
                  className=""
                >
                  <MdMenuOpen
                    size={24}
                    className="is-drawer-open:rotate-180 duration-300 my-1.5 inline-block size-4"
                  />
                </label>
              </li>

              {/* Overview */}
              <SidebarMenuItem icon={FiHome} to={"/dashboard"} end={true}>
                Overview
              </SidebarMenuItem>

              {/* Overview */}
              <SidebarMenuItem
                icon={MdOutlineCarRental}
                to={"/dashboard/my-bookings"}
              >
                My Bookings
              </SidebarMenuItem>

              {/* Manage Cars */}
              <SidebarMenuItem
                icon={MdDirectionsCar}
                to={"/dashboard/manage-cars"}
              >
                Manage Cars
              </SidebarMenuItem>

              {/* Add New Car */}
              <SidebarMenuItem
                icon={MdAddCircleOutline}
                to={"/dashboard/add-car"}
              >
                Add Car
              </SidebarMenuItem>
            </ul>

            {/* profile and logout */}
            <ul className="menu justify-end w-full grow">
              {/* Overview */}
              <SidebarMenuItem
                icon={CgProfile}
                to={"/dashboard/profile"}
                end={true}
              >
                Profile
              </SidebarMenuItem>
              <li>
                <button className="hover:bg-error"
                data-tip="Logout"
                >
                  <MdLogout className="my-1.5 inline-block " />
                  <span className="is-drawer-close:hidden text-nowrap">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default DashboardLayout;
