import React from "react";
import { Link } from "react-router";
import Logo from "../../Components/Logo/Logo";
import MyContainer from "../../Components/MyContainer/MyContainer";
import GoogleProvider from "../../Components/GoogleProvider/GoogleProvider";
import { IoPersonCircleOutline } from "react-icons/io5";

const Signup = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const profile = e.target.profile.value;
        const password = e.target.password.value;
        const checkbox = e.target.checkbox.checked
        console.log(name, email, profile, password, checkbox);
        
    } 
  return (
    <>
      <MyContainer className="flex justify-between rounded-3xl overflow-hidden mt-10 shadow bg-neutral ">
        {/* banner */}
        <div className="hidden sm:flex flex-col items-center justify-center flex-1  text-white p-5 ">
          <p className="text-4xl text-center">
            Easy <span className="text-primary border-b-2">Car</span> Rental
          </p>
          <figure className="">
            <img
              src="https://i.postimg.cc/Fs6hRG2h/Pngtree-red-bmw-x2-suv-with-22567270.png"
              alt="banner"
            />
          </figure>
        </div>

        {/* Login form */}
        <div className="flex-1 p-5 rounded-s-3xl bg-base-100">
          {/* logo */}
          <div className="flex items-center justify-between gap-2">
            <Logo />
            <Link
              to={"/login"}
              className="flex items-center gap-1 text-sm cursor-pointer hover:text-primary transition-all"
            >
              <IoPersonCircleOutline size={20} />
              Sign In
            </Link>
          </div>

          {/* form */}
          <form onSubmit={handleRegister} className="mt-10">
            <h4 className="text-3xl font-semibold mb-5">Sign Up</h4>

            {/* name */}
            <div>
              <input
                required
                name="name"
                type="text"
                className="my_input mb-4"
                placeholder="Enter your name"
              />
            </div>

            {/* profile image */}
            <div>
              <input
                required
                name="profile"
                type="url"
                className="my_input mb-4"
                placeholder="Enter your profile(URL)"
              />
            </div>

            {/* email */}
            <div>
              <input
                required
                name="email"
                type="text"
                className="my_input mb-4"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <input
              required
              name="password"
                type="text"
                className="my_input"
                placeholder="New password"
              />
            </div>

            {/* terms and condition */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                className="checkbox checkbox-warning w-5 h-5"
              />
              <label htmlFor="checkbox">Terms & Condition</label>
            </div>

            <button className="my_btn btn-block !rounded-full mt-5">
              Sign Up
            </button>
          </form>
          <p className={"divider"}>OR</p>
          <GoogleProvider>Sign Up</GoogleProvider>
        </div>
      </MyContainer>
    </>
  );
};

export default Signup;
