import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { MdEdit } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { toast } from "react-toastify";
import Spinner from "../../../Components/Spinner/Spinner";

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    setLoading(true);
    updateUser({ displayName, photoURL }).then((res) => {
      setLoading(false);
      toast.success("update you profile");
    });
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">My Profile</h2>

      <div
        className="    bg-gradient-to-br
    from-base-200 to-base-300
    dark:from-[#0f172a] dark:to-[#020617]
    border border-base-300 dark:border-white/10
    shadow-lg border border-base-300 rounded-xl p-6"
      >
        {/* Avatar */}
        <div className="flex flex-col gap-4 items-center mb-6 text-center justify-center  ">
          <figure>
            <img
              src={user?.photoURL}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-green-300"
            />
          </figure>

          <div>
            <p className="text-xl font-semibold">{user?.displayName}</p>
            <p className="text-sm text-gray-400">{user?.email}</p>

            <button
              className="btn mt-2 btn-success text-white"
              onClick={() => setOpen(!open)}
            >
              <MdEdit />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleUpdateProfile}
          className={`space-y-4 overflow-hidden ${
            open ? "h-56 p-2" : "h-0"
          } duration-500 `}
        >
          {/* Name */}
          <div>
            <p className="my_label !block">Update Your Name</p>
            <label className="input w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                required
                placeholder="Name"
                title="Your Name"
              />
            </label>
          </div>

          {/* Photo URL */}
          <div>
            <p className="my_label !block">Update Your Photo</p>{" "}
            <label className="input w-full">
              <IoMdPhotos className="text-gray-400" />
              <input
                type="url"
                name="photo"
                className="w-full"
                defaultValue={user?.photoURL}
                required
              />
            </label>
          </div>

          {/* Button */}
          <button type="submit" className="my_btn w-full" disabled={loading}>
            {loading && (
              <span className="loading loading-spinner loading-sm"></span>
            )}
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
