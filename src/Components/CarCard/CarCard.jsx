import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const CarCard = ({ car }) => {
  const { _id, carName, carStatus, category, image, pricePerDay, description } =
    car;
  const shortDescription =
    description.length > 100 ? description.slice(0, 100) : description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "linear"}}
      viewport={{ once: true }}
      className="border border-gray-300 rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all flex flex-col"
    >
      {/* image */}
      <figure className="h-54 bg-gray-400 rounded-b-xl overflow-hidden relative ">
        <img
          className="h-full w-full object-cover hover:scale-105 duration-300"
          src={image}
          alt=""
        />
        <p
          className={`absolute top-2 right-2  text-white rounded-full px-2 ${
            carStatus == "available" ? "bg-success" : "bg-red-500"
          }`}
        >
          {carStatus}
        </p>
      </figure>

      {/* content */}
      <div className="p-4 relative space-y-2 grow flex  flex-col">
        <p className="bg-secondary text-sm inline-block px-2 rounded-full text-white absolute -top-3 ">
          {category}
        </p>
        <h4 className="text-2xl font-semibold">{carName}</h4>
        <p className="text-sm text-gray-400 grow">
          {shortDescription}
          {description.length > 100 && (
            <Link className="text-indigo-600"> ...More</Link>
          )}
        </p>
        <div className="flex gap-2 items-center justify-between mt-4">
          <div>
            <p className="text-gray-600 text-sm">per day</p>
            <p className="text-lg font-semibold">${pricePerDay}.00</p>
          </div>
          <Link to={`/cars/${_id}`} className="my_btn_outline">
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
