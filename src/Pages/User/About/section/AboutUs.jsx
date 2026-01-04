import React from "react";
import { FaCarSide } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <span className="inline-flex items-center gap-2 text-primary font-medium mb-3">
          <FaCarSide /> About Us
        </span>

        <h2 className="text-3xl font-bold leading-tight mb-4">
          A Smarter Way to Rent Cars
        </h2>

        <p className="text-base-content/80 leading-relaxed">
          We are a modern car rental platform focused on simplicity,
          transparency, and reliability. Our goal is to make car booking fast,
          secure, and stress-free — whether you need a ride for business,
          travel, or daily use.
        </p>

        <p className="mt-4 text-base-content/70">
          From browsing available cars to managing bookings from your dashboard,
          every feature is designed with user experience in mind.
        </p>
      </div>

      {/* Visual Card */}
      <div className="bg-base-300 rounded-2xl p-8 shadow-sm border border-gray-400">
        <h4 className="text-lg font-semibold mb-3 text-primary">
          Why Choose Us?
        </h4>
        <ul className="space-y-3 text-sm">
          <li>✔ Easy online booking</li>
          <li>✔ Verified & well-maintained cars</li>
          <li>✔ Transparent pricing</li>
          <li>✔ User-friendly dashboard</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
