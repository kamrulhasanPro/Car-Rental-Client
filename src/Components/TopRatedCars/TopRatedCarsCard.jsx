import React from "react";
import MyContainer from "../MyContainer/MyContainer";
import { BiSolidCategory } from "react-icons/bi";
import { MdDateRange, MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { GrStatusGoodSmall } from "react-icons/gr";
import { FcRating } from "react-icons/fc";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const TopRatedCarsCard = ({ car }) => {
  const {
    _id,
    image,
    pricePerDay,
    category,
    carStatus,
    ratings,
    seats,
    created_at,
  } = car;

  return (
    <>
      {/* top rated cars */}
      <MyContainer className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* image */}
        <div className="flex-1 flex justify-end">
          <figure className="">
            <img src={image} alt="" />
          </figure>
        </div>

        {/* content */}
        <div className="flex-1">
          {/* features or other */}
          <div className="p-4">
            <h5 className="text-2xl font-semibold">${pricePerDay}</h5>
            <p>rest per day</p>

            <div className="divider my-1"></div>

            {/* category */}
            <p className="flex items-center gap-1">
              <span className="flex items-center gap-1 text-primary font-medium">
                <BiSolidCategory /> Brand
              </span>
              : {category}
            </p>

            {/* seats */}
            <p className="flex items-center gap-1">
              <span className="flex items-center gap-1 text-primary font-medium">
                <MdOutlineAirlineSeatReclineNormal /> Seats
              </span>
              : {seats}
            </p>

            {/* status */}
            <p className="flex items-center gap-1">
              <span className="flex items-center gap-1 text-primary font-medium">
                <GrStatusGoodSmall /> Status
              </span>
              :{" "}
              <button
                className={`py-.5 px-2 text-white ${
                  carStatus === "available" ? "bg-success" : "bg-red-500"
                } rounded-full`}
              >
                {carStatus}
              </button>
            </p>

            {/* ratings */}
            <p className="flex items-center gap-1">
              <span className="flex items-center gap-1 text-primary font-medium">
                <FcRating /> Ratings
              </span>
              :{" "}
              {Array.from({ length: 5 }).map((_, index) =>
                // console.log(index)
                index < ratings ? (
                  <FaStar fill="#f57c00" />
                ) : (
                  <FaStar fill="gray" />
                )
              )}
            </p>

            {/* create at */}
            <p className="flex items-center gap-1">
              <span className="flex items-center gap-1 text-primary font-medium">
                <MdDateRange /> Posted
              </span>
              : {new Date(created_at).toLocaleDateString()}
            </p>

            {/* button */}
            <Link to={`/cars/${_id}`} className="my_btn_outline mt-3">
              View Details
            </Link>
          </div>
        </div>
      </MyContainer>
    </>
  );
};

export default TopRatedCarsCard;
