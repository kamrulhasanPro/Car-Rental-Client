import React from "react";

const QuickBookingCard = ({ step }) => {
  const { title, description, icon, iconColor, bgColor } = step || {};
  const Icon = icon;
  return (
    <div
      className={`${bgColor} p-4 rounded-lg hover:shadow-lg duration-300 hover:scale-[1.02]`}
    >
      <div>
        <Icon className={`${iconColor} text-4xl`} />
      </div>
      <div className="mt-5">
        <h3 className="text-lg sm:text-xl font-semibold ">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default QuickBookingCard;
