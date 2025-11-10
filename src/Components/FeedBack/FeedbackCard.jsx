import React from "react";
import { SiComma } from "react-icons/si";

const FeedbackCard = () => {
  return (
    <div className="border border-gray-200 overflow-hidden rounded-2xl">
      {/* feedback message */}
      <div className="p-4">
        <p className="text-xl font-semibold italic">
          “
          {
            "We offer transparent pricing with no hidden fees. Get the most value for your money with exclusive deals and seasonal discounts."
          }
          ”
        </p>

        <div className="flex justify-end mt-2">
          <SiComma />
          <SiComma />
        </div>
      </div>

      {/* feedback profile */}
      <div className="flex items-center gap-2 my_bg p-1.5 text-white">
        <figure className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
          <img src="" alt="" />
        </figure>

        <div>
          <h4 className="text-[1rem] font-semibold">Kamrul Hasan</h4>
          <p className="text-sm text-gray-100">Ocation</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
