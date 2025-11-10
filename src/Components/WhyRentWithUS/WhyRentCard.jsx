import React from "react";

const WhyRentCard = ({ feature }) => {
  const { icon, title, desc } = feature;
  return (
    // card
    <div className="flex flex-col items-center justify-center border border-gray-200 h-72 p-4 hover:shadow-lg transition-all rounded-sm hover:scale-102 ">
      {/* icon */}
      <div className="bg-primary/20 rounded-full p-2.5 mb-2 text-primary">
        {icon}
      </div>

      {/* content */}
      <div className="text-center space-y-2.5">
        <h3 className="text-xl text-neutral font-medium">{title}</h3>
        <p className="text-gray-400 leading-relaxed ">{desc}</p>
      </div>
    </div>
  );
};

export default WhyRentCard;
