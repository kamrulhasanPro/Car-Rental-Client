import React from 'react';
import {  FaBullseye } from "react-icons/fa";

const OurVision = () => {
    return (
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Vision Card */}
          <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
            <span className="inline-flex items-center gap-2 text-primary font-medium mb-3">
              <FaBullseye /> Our Vision
            </span>

            <h2 className="text-3xl font-bold mb-4">
              Driving the Future of Mobility
            </h2>

            <p className="text-base-content/80 leading-relaxed">
              Our vision is to build a trusted, technology-driven car rental
              ecosystem that connects people with mobility solutions anytime,
              anywhere.
            </p>

            <p className="mt-4 text-base-content/70">
              We aim to continuously improve through innovation, automation, and
              customer-centric design — setting new standards for digital car
              rental experiences.
            </p>
          </div>

          {/* Vision Points */}
          <div>
            <ul className="space-y-4">
              <li className="p-4 bg-base-100 rounded-xl border border-base-300">
                🚀 Scalable & future-ready platform
              </li>
              <li className="p-4 bg-base-100 rounded-xl border border-base-300">
                🌍 Accessible car rentals for everyone
              </li>
              <li className="p-4 bg-base-100 rounded-xl border border-base-300">
                🔒 Secure, reliable & transparent service
              </li>
            </ul>
          </div>
        </div>
    );
};

export default OurVision;