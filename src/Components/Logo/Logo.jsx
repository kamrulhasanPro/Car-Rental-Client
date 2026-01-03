import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <>
      {/* logo */}
      <div className="flex items-end justify-start gap-2">
        {/* logo */}
        <Link to={"/"} className="flex items-end justify-center gap-2">
          <figure className="w-10 h-10 overflow-hidden">
            <img src="./Logo.png" alt="" />
          </figure>
          <p className="text-xl font-semibold hidden sm:inline">
            <span className="text-primary">Car</span> Rental
          </p>
        </Link>
      </div>
    </>
  );
};

export default Logo;
