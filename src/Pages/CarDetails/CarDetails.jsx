import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAxiosSecure } from "../../api/useAxiosSecure";
import { toast } from "react-toastify";
import Spinner from "../../Components/Spinner/Spinner";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { BiSolidCategory } from "react-icons/bi";
import { GrStatusGoodSmall } from "react-icons/gr";
import { MdDateRange, MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import BookingModal from "../../Components/Modal/BookingModal";
import SellerInfo from "../../Components/CarDetails/SellerInfo";

const CarDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure(`/cars/${id}`)
      .then((res) => {
        console.log(res);
        setCar(res.data);
      })
      .catch((err) => toast.error(err.code));
  }, [id, axiosSecure]);

  if (!car) {
    return <Spinner></Spinner>;
  }

  const {
    carName,
    description,
    image,
    pricePerDay,
    category,
    carStatus,
    ratings,
    seats,
    created_at,
  } = car;
  return (
    <MyContainer className={"mt-10"}>
      <div className="flex flex-col md:flex-row gap-4">
        {/* left side */}
        <div className="flex-1 space-y-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 my-4 cursor-pointer"
          >
            <FaArrowLeft />
            Go Back
          </button>

          <figure className=" bg-primary/10 rounded-xl">
            <img src={image} alt="" />
          </figure>

          <div className="hidden md:block">
            <SellerInfo car={car} />
          </div>
        </div>

        {/* right side */}
        <div className="flex-1 space-y-4">
          <h4 className="text-4xl font-semibold">{carName}</h4>

          {/* description */}
          <div className="bg-white rounded-2xl p-4">
            <h5 className="text-2xl font-semibold">Car Description</h5>
            <div className="divider my-1"></div>
            <p>{description}</p>
          </div>

          {/* features or other */}
          <div className="bg-white rounded-2xl p-4">
            <h5 className="text-2xl font-semibold">Car Details</h5>
            <div className="divider my-1"></div>

            {/* category */}
            <p className="flex items-center gap-1">
              <span className="flex items-center gap-1 text-primary font-medium">
                <BiSolidCategory /> Category
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
              <button className={`py-.5 px-2 text-white ${carStatus == 'available' ? 'bg-success' : 'bg-red-500'} rounded-full`}>
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
          </div>

          <div className="md:hidden">
            <SellerInfo car={car} />
          </div>

          {/* price */}
          <div className="bg-white rounded-2xl p-4">
            <h5 className="text-2xl font-semibold">${pricePerDay}</h5>
            <p>
              Price /<small>per day</small>
            </p>
          </div>

          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="my_btn btn-block"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* modal */}
      <BookingModal car={car} />
    </MyContainer>
  );
};

export default CarDetails;
