import React from "react";
import {
  FaMoneyBillWave,
  FaCarSide,
  FaShieldAlt,
  FaRegClock,
  FaGasPump,
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import WhyRentCard from "./WhyRentCard";
import MyContainer from "../MyContainer/MyContainer";
import MyTitle from "../Title/MyTitle";

const WhyRent = () => {
  // features array
  const features = [
    {
      icon: <FaMoneyBillWave size={40} />,
      title: "Best Price Guarantee",
      desc: "We offer transparent pricing with no hidden fees. Get the most value for your money with exclusive deals and seasonal discounts.",
    },
    {
      icon: <FaCarSide size={40} />,
      title: "Wide Car Selection",
      desc: "Choose from economy, SUVs, luxury, and premium cars — all well-maintained and ready for any journey, short or long.",
    },
    {
      icon: <MdSupportAgent size={40} />,
      title: "24/7 Customer Support",
      desc: "Need help? Our professional support team is always here to assist you — day or night — to ensure a smooth trip.",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Secure & Trusted",
      desc: "Your safety matters. All vehicles are fully insurance-covered and routinely inspected for your peace of mind.",
    },
    {
      icon: <FaRegClock size={40} />,
      title: "Fast Pickup & Drop-off",
      desc: "Save time with quick booking, fast document verification, and seamless pickup & return process at multiple locations.",
    },
    {
      icon: <FaGasPump size={40} />,
      title: "Fuel-Efficient Options",
      desc: "We offer fuel-efficient and eco-friendly vehicles to help you travel more and spend less on fuel.",
    },
  ];

  return (
    <MyContainer className="mt-16">
      {/* title */}
      <MyTitle>
        Why <span className="text-primary border-b-2">Rent</span> With us
      </MyTitle>

      {/* rant cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {features.map((feature) => (
          <WhyRentCard feature={feature} />
        ))}
      </div>
    </MyContainer>
  );
};

export default WhyRent;
