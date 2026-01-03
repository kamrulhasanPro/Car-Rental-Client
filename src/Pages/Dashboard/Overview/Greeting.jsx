import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { IoCloseCircle } from "react-icons/io5";

const Greeting = () => {
  const { user } = useAuth();
  const [close, setClose] = useState(false);
  return (
    <>
      <div
        className={`${
          close && "hidden"
        } bg-base-300 p-5 rounded-md flex flex-col sm:flex-row items-center justify-between gap-2`}
      >
        <div>
          <h2 className="text-xl font-semibold text-neutral">
            Welcome back,{" "}
            <span className="text-primary">{user?.displayName}!</span>
          </h2>
          <p className="text-sm text-gray-400">
            Here’s what’s going on with your dashboard today.
          </p>
        </div>

        <div>
          <IoCloseCircle
            onClick={() => setClose(true)}
            size={36}
            className="text-red-400 cursor-pointer bg-white rounded-full hover:scale-105 duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default Greeting;
