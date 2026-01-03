import React from "react";
import { FaCarSide, FaClipboardCheck, FaSmile, FaAward } from "react-icons/fa";

const TrustedCard = () => {
  const partners = [
    {
      id: 1,
      label: "Cars Available",
      value: "120+",
      icon: FaCarSide,
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
    },
    {
      id: 2,
      label: "Bookings Completed",
      value: "1k+",
      icon: FaClipboardCheck,
      iconColor: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      id: 3,
      label: "Happy Customers",
      value: "800+",
      icon: FaSmile,
      iconColor: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    {
      id: 4,
      label: "Years of Service",
      value: "5+",
      icon: FaAward,
      iconColor: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
      {partners.map((partner) => (
        <div
          key={partner.id}
          className={`flex flex-col items-center justify-center h-40 ${partner.bgColor} rounded-lg p-2 !bg-linear-to-b`}
        >
          <div className={`text-4xl ${partner.iconColor}`}>
            <partner.icon />
          </div>
          <p className="font-medium text-sm text-neutral/50 mt-2 text-center">
            {partner?.label}
          </p>
          <p className="text-3xl text-neutral font-semibold mt-2">
            {partner?.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TrustedCard;
