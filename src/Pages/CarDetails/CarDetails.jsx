import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
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
import { FaRegFaceSmile } from "react-icons/fa6";

const CarDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [car, setCar] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoader(true);
    axiosSecure(`/cars/${id}`)
      .then((res) => {
        console.log(res);
        setCar(res.data);
        setLoader(false);
      })
      .catch((err) => {
        toast.error(err.code);
        setLoader(false);
      });
  }, [id, axiosSecure]);

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

  const [isAvailable, setIsAvailable] = useState(false);
  useEffect(() => {
    setIsAvailable(carStatus == "available");
  }, [carStatus]);

  if (loader) {
    return <Spinner></Spinner>;
  }

  if (car.length === 0) {
    return (
      <div className="flex items-center justify-center mt-10">
        <MyContainer className="flex flex-col max-w-80 items-center justify-center bg-white p-4 text-center rounded-2xl gap-2.5 shadow">
          <FaRegFaceSmile className="text-3xl text-primary" />
          <div>
            <h5 className="text-3xl mb-1">No found this product</h5>
            <p className="text-gray-400">
              Maybe not added this car. Please check another car.{" "}
            </p>
          </div>
          <Link to={"/cars"} className="my_btn">
            All Cars
          </Link>
        </MyContainer>
      </div>
    );
  }

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

          <figure className=" bg-primary/10 rounded-xl h-80">
            <img className="w-full h-full rounded-xl object-cover" src={image} alt="" />
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
              <button
                className={`py-.5 px-2 text-white ${
                  isAvailable  ? "bg-success" : "bg-red-500"
                } rounded-full`}
              >
                {isAvailable ? "available" : "booked"}
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
            onClick={() => {
              if (!isAvailable) {
                return toast.error("Already Booked.");
              }
              document.getElementById("my_modal_5").showModal();
            }}
            className={`my_btn btn-block ${
              isAvailable || "!cursor-not-allowed"
            }`}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* modal */}
      <BookingModal car={car} setIsAvailable={setIsAvailable} />
    </MyContainer>
  );
};

export default CarDetails;
