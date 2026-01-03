import React from "react";
import MyContainer from "../../../../../Components/MyContainer/MyContainer";
import MyTitle from "../../../../../Components/Title/MyTitle";
import { MdEmail } from "react-icons/md";
import MailIcon from "../../../../../Components/MailIcon";

const Newsletter = () => {
  return (
    <MyContainer
      className={
        "bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900  backdrop-blur-md rounded-4xl p-10 mt-8 md:mt-16 flex flex-col items-center justify-center"
      }
    >
      <MailIcon />
      {/* title */}
      <MyTitle className="!m-0 !mb-2 text-secondary">
        Get Exclusive Car Rental Deals & Updates
      </MyTitle>
      {/* subtitle */}
      <p className="text-center text-gray-400 mb-3">
        Subscribe to our newsletter and be the first to know about special
        discounts, new car arrivals, and travel tips—straight to your inbox.
      </p>

      {/* email */}
      <form
        //   onSubmit={handleSearch}
        className="flex items-center justify-between border bg-white/80 text-gray-900 focus-within:border-primary rounded-full overflow-hidden max-w-96 mb-2"
      >
        <input
          type="email"
          name="email"
          className="my_input outline-none"
          placeholder="suppose@gmail.com"
        />
        <button
          type="submit"
          className="my_bg py-3 px-2  flex items-center justify-center text-white cursor-pointer"
        >
          {/* <IoSearchSharp /> */}
          Submit
        </button>
      </form>
      <p className="text-sm text-gray-400 text-center italic">
        We respect your privacy. No spam unsubscribe anytime.
      </p>
    </MyContainer>
  );
};

export default Newsletter;
