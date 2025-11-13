import React from "react";
import { SiComma } from "react-icons/si";
import { Tooltip } from "react-tooltip";

const FeedbackCard = ({ item }) => {
  const { _id, name, feedback, passion, image } = item;
  const massage = feedback.length > 150 ? feedback.slice(0, 150) : feedback;

  return (
    <div className="border border-gray-200 overflow-hidden rounded-2xl">
      {/* feedback message */}
      <div className="p-4 h-48 flex flex-col">
        <p className="text-xl font-semibold italic grow">
          “{massage}
          {feedback.length > 150 && (
            <span
              data-tooltip-id={`feed-${_id}`}
              data-tooltip-content={feedback}
              className="text-indigo-400 cursor-pointer"
            >
              ...more
            </span>
          )}{" "}
          ”
        </p>

        <div className="flex justify-end mt-2">
          <SiComma />
          <SiComma />
        </div>
      </div>

      {/* feedback profile */}
      <div className="flex items-center gap-2 my_bg p-1.5 text-white">
        <figure className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden outline-2 outline-indigo-200">
          <img className="w-full h-full object-cover" src={image} alt="" />
        </figure>

        <div>
          <h4 className="text-[1rem] font-semibold">{name}</h4>
          <p className="text-sm text-gray-100">{passion}</p>
        </div>
      </div>
      <Tooltip
        id={`feed-${_id}`}
        place="top-end"
        style={{
          maxWidth: "300px",
          background: "#111",
          zIndex: "100",
        }}
      />
    </div>
  );
};

export default FeedbackCard;
