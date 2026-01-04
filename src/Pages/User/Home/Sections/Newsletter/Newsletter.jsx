import React, { useState } from "react";
import MyContainer from "../../../../../Components/MyContainer/MyContainer";
import MyTitle from "../../../../../Components/Title/MyTitle";
import { MdEmail } from "react-icons/md";
import MailIcon from "../../../../../Components/MailIcon";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "3c1b4e59-0e18-439a-99f5-caa992b8b580");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setLoading(false);
      toast.success('"Form Submitted Successfully"');
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setLoading(false);
    }
  };
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
        onSubmit={onSubmit}
        className="flex items-center justify-between border bg-white/80 text-gray-900 focus-within:border-primary rounded-full overflow-hidden max-w-96 mb-2"
      >
        <input
          type="email"
          name="NewsLetter Email"
          className="my_input outline-none"
          placeholder="suppose@gmail.com"
        />
        <button
          type="submit"
          className="my_bg py-3 px-2  flex items-center justify-center text-white cursor-pointer"
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "Send"
          )}
        </button>
      </form>
      <p className="text-sm text-gray-400 text-center italic">
        We respect your privacy. No spam unsubscribe anytime.
      </p>
    </MyContainer>
  );
};

export default Newsletter;
