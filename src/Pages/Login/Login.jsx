import React from "react";
import MyContainer from "../../Components/MyContainer/MyContainer";
import Logo from "../../Components/Logo/Logo";
import { IoPersonCircleOutline } from "react-icons/io5";
import GoogleProvider from "../../Components/GoogleProvider/GoogleProvider";
import { Link } from "react-router";

const Login = () => {
  return (
    <MyContainer className="flex justify-between rounded-2xl overflow-hidden mt-10 shadow">
      {/* banner */}
      <div className="hidden sm:flex flex-col items-center justify-center flex-1 bg-neutral text-white p-5">
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
      <div className="flex-1 p-5">
        {/* logo */}
        <div className="flex items-center justify-between gap-2">
          <Logo />
          <Link to={'/register'} className="flex items-center gap-1 text-sm cursor-pointer hover:text-primary transition-all">
            <IoPersonCircleOutline size={20} />
            Sign Up
          </Link>
        </div>

        {/* form */}
        <form className="mt-10">
          <h4 className="text-3xl font-semibold mb-5">Sign In</h4>

          {/* email */}
          <div>
            <input
              type="text"
              className="my_input mb-4"
              placeholder="Email or Username"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <input type="text" className="my_input" placeholder="Password" />
          </div>

          {/* forget */}
          <p className="text-sm cursor-pointer mb-5 hover:text-secondary text-primary hover:outline-">Forget Password?</p>

          <button className="my_btn btn-block !rounded-full">Sign In</button>
        </form>
        <p className={"divider"}>OR</p>
        <GoogleProvider>Login</GoogleProvider>
      </div>
    </MyContainer>
  );
};

export default Login;
