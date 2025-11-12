import React from "react";
import { BiSolidCategory } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { Link } from "react-router";

const BookingCard = ({ car }) => {
  const {
    bookingTime,
    carName,
    category,
    clientAddress,
    clientContact,
    clientEmail,
    clientName,
    description,
    image,
    pricePerDay,
    seats,
  } = car;

  const shortDescription =
    description.length > 200 ? description.slice(0, 200) : description;

  const actionBtn = (
    <>
      <button className="btn btn-success text-white">Details</button>
      <button className="btn btn-secondary bg-red-400 text-white">
        Remove
      </button>
    </>
  );

  const btnStyle =
    "py-1 px-1.5 flex items-center justify-center rounded-full gap-1";


  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between my_bg text-white rounded-xl p-4 mt-4">
      {/* details */}
      <div className="flex-2">
        <h5 className="text-2xl font-medium">{carName}</h5>
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          <button className={`${btnStyle} bg-red-300`}>
            <BiSolidCategory />
            {category}
          </button>
          <button className={`${btnStyle} bg-emerald-300`}>
            <IoPerson />
            {clientName}
          </button>
          <button className={`${btnStyle} bg-indigo-300`}>
            <MdDateRange />
            {new Date(bookingTime).toLocaleDateString()}
          </button>
        </div>
        <p className="mt-2">{shortDescription}{description.length > 100 && <Link className="text-indigo-600"> ...More</Link>}</p>
      </div>

      {/* action */}
      <div className="md:flex-1 flex md:justify-end">
        <div className="hidden md:inline">
          <CustomDropdown
            trigger={<BsThreeDotsVertical size={24} className="cursor-pointer"/>}
            className={'right-1/12 top-2/12'}
          >
            <div className="flex flex-col bg-white p-2 rounded-lg gap-2 ">
                {actionBtn}
            </div>
          </CustomDropdown>
        </div>
          <div className="space-x-2 md:hidden">
            {actionBtn}
          </div>
      </div>
    </div>
  );
};

export default BookingCard;
