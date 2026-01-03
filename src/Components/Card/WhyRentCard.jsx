import React from "react";
import { motion } from "framer-motion";
const WhyRentCard = ({ feature }) => {
  const { icon, title, desc } = feature;
  return (
    // card
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center border border-gray-200 h-72 p-4 hover:shadow-lg transition-all rounded-sm hover:scale-102 "
    >
      {/* icon */}
      <div className="bg-primary/20 rounded-full p-2.5 mb-2 text-primary">
        {icon}
      </div>

      {/* content */}
      <div className="text-center space-y-2.5">
        <h3 className="text-xl text-neutral font-medium">{title}</h3>
        <p className="text-gray-400 leading-relaxed ">{desc}</p>
      </div>
    </motion.div>
  );
};

export default WhyRentCard;
