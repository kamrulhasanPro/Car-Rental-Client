import React from "react";
import { FaCarSide, FaClipboardCheck, FaSmile, FaAward } from "react-icons/fa";
import TrustedCard from "../../../Components/TrustedCard/TrustedCard";
import MyContainer from "../../../Components/MyContainer/MyContainer";
import MyTitle from "../../../Components/Title/MyTitle";

const TrustedPartner = () => {
  return (
    <MyContainer>
      <MyTitle>
        A Trusted <span className="text-primary border-b-2">Car</span> Rental
        Partner
      </MyTitle>

      <div className="flex flex-col items-center gap-4">
        <div className="flex-1 md:text-center">
          {/* heading */}
          <h1 className="text-3xl text-secondary font-semibold ">
            You choose the destination, we provide the perfect ride.
          </h1>

          {/* descriptions */}
          <p className="text-gray-400 mt-2">
            We are a reliable car rental service committed to making your
            journey smooth, safe, and hassle-free. From compact city cars to
            luxury and SUVs, our well-maintained fleet and simple booking
            process ensure comfort, transparency, and confidence every time you
            hit the road.
          </p>
        </div>

        {/* card */}
        <div className="flex-1">
          <TrustedCard />
        </div>
      </div>
    </MyContainer>
  );
};

export default TrustedPartner;
