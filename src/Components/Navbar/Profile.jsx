import React from "react";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import { GoPerson } from "react-icons/go";
import {
  MdOutlineDarkMode,
  MdOutlineDashboard,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { Link } from "react-router";
import ThemeToggle from "../Theme/ThemeToggle";

const Profile = () => {
  const { user, signOutUser } = useAuth();
  const handleLogout = () => {
    signOutUser().then(() => toast.success("Logout Success"));
  };
  return (
    <CustomDropdown
      trigger={
        <figure className="w-11 h-11 rounded-full overflow-hidden cursor-pointer outline outline-secondary outline-offset-2">
          <img src={user?.photoURL} alt="profile image" />
        </figure>
      }
      className={"right-0"}
      height={72}
    >
      <div className="bg-base-100  p-3 rounded-xl border border-gray-300">
        <div className="flex items-center gap-2">
          <figure className="w-11 h-11 rounded-full overflow-hidden">
            <img src={user?.photoURL} alt="profile image" />
          </figure>
          <div>
            <h3 className="font-semibold">{user?.displayName}</h3>
            <p className="text-sm text-gray-400">{user?.email}</p>
          </div>
        </div>

        <div className="divider m-0" />
        <div className="text-natural ">
          {/* profile */}
          <Link className="link_style">
            <GoPerson size={20} /> Profile
          </Link>

          {/* dashboard */}
          <Link to={"/dashboard"} className="link_style">
            <MdOutlineDashboard size={20} />
            Dashboard
          </Link>

          {/* help center */}
          <Link className="link_style">
            <MdOutlineSupportAgent size={20} />
            Help Center
          </Link>

          {/* toggle theme */}
          <div className="link_style cursor-pointer">
            <ThemeToggle />
          </div>

          <button
            onClick={handleLogout}
            className="btn bg-red-400 hover:bg-red-600 btn-block text-white mt-4"
          >
            Logout
          </button>
        </div>
      </div>
    </CustomDropdown>
  );
};

export default Profile;
