import React from "react";
import { BsFillFuelPumpFill, BsFillPersonVcardFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";

const SellerInfo = ({ car }) => {
  const { _id, location, fuelType, providerEmail, providerName } = car;

  return (
    <>
      {/* seller information */}
      <div className="bg-white rounded-2xl p-4 mb-4">
        <h5 className="text-2xl font-semibold">Provider Information</h5>

        <div className="divider my-1"></div>

        {/* provider name */}
        <p className="flex items-center gap-1">
          <span className="flex items-center gap-1 text-primary font-medium">
            <BsFillPersonVcardFill /> Provider Name
          </span>
          : {providerName}
        </p>

        {/* provider email */}
        <p className="flex items-center gap-1">
          <span className="flex items-center gap-1 text-primary font-medium">
            <MdMarkEmailRead /> Provider Email
          </span>
          : {providerEmail}
        </p>
      </div>

      {/* more details */}
      <div className="bg-white rounded-2xl p-4">
        <h5 className="text-2xl font-semibold">More Details</h5>

        <div className="divider my-1"></div>

        {/* product id */}
        <p className="flex items-center gap-1">
          <span className="flex items-center gap-1 text-primary font-medium">
            <MdMarkEmailRead /> Product Id
          </span>
          : {_id}
        </p>

        {/* Location */}
        <p className="flex items-center gap-1">
          <span className="flex items-center gap-1 text-primary font-medium">
            <FaLocationDot fill="red" /> Location
          </span>
          : {location}
        </p>

        {/* fuelType */}
        <p className="flex items-center gap-1">
          <span className="flex items-center gap-1 text-primary font-medium">
            <BsFillFuelPumpFill /> Fuel Type
          </span>
          : {fuelType}
        </p>
      </div>
    </>
  );
};

export default SellerInfo;
