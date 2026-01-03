import React from "react";
import MyContainer from "../../../../../Components/MyContainer/MyContainer";
import MyTitle from "../../../../../Components/Title/MyTitle";
import QuickBookingCard from "../../../../../Components/Card/QuickBookingCard";
import { FaCar, FaCalendarAlt, FaCreditCard, FaRoad } from "react-icons/fa";

const RantCarAMinute = () => {
  const steps = [
    {
      id: 1,
      title: "Find Your Car",
      description:
        "Browse a wide range of well-maintained cars that match your travel needs and budget.",
      icon: FaCar,
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
    },
    {
      id: 2,
      title: "Select Dates",
      description:
        "Choose your pickup and return dates with flexible scheduling options.",
      icon: FaCalendarAlt,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: 3,
      title: "Book & Pay Securely",
      description:
        "Confirm your booking with transparent pricing and secure online payment.",
      icon: FaCreditCard,
      iconColor: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      id: 4,
      title: "Pick Up & Drive",
      description:
        "Collect your car or get it delivered and enjoy a smooth driving experience.",
      icon: FaRoad,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <MyContainer>
      {/* title */}
      <MyTitle className="!mb-2">
        Rent a <span className="text-primary border-b-2">Car</span> in Minutes
      </MyTitle>
      {/* subtitle */}
      <p className="text-center text-gray-400 mb-5">
        Choose your car, set your dates, and hit the road with confidence. Our
        simple booking process helps you find the perfect ride fast, secure, and
        hassle-free.
      </p>

      {/* card */}
      <div className="grid grid-cols-2 gap-4">
        {steps.map((step) => (
          <QuickBookingCard key={step.id} step={step} />
        ))}
      </div>
    </MyContainer>
  );
};

export default RantCarAMinute;
