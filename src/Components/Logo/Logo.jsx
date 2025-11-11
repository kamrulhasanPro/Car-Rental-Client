import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <>
      {/* logo */}
      <div className="flex items-end justify-start gap-2">
        <figure className="w-10 h-10 overflow-hidden">
          <img src="./Logo.png" alt="" />
        </figure>
        <Link to={"/"} className="text-xl font-semibold">
          <span className="text-primary">Car</span> Rental
        </Link>
      </div>
    </>
  );
};

export default Logo;
