import React from "react";
import { SiComma } from "react-icons/si";

const FeedbackCard = ({item}) => {
    const {name, feedback} = item
    const massage = feedback.length > 100 ? feedback.slice(0,100) : feedback

  return (
    <div className="border border-gray-200 overflow-hidden rounded-2xl">
      {/* feedback message */}
      <div className="p-4 h-48 flex flex-col">
        <p className="text-xl font-semibold italic grow">
          “
          {
            massage
          }
          
          {
            feedback.length > 100 && <button className="text-indigo-400 cursor-pointer">...more</button>
          } ”
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
          <h4 className="text-[1rem] font-semibold">{name}</h4>
          <p className="text-sm text-gray-100">Ocation</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
