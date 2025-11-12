import React from "react";
import { BiSolidCategory } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { Link } from "react-router";
import { useAxiosSecure } from "../../api/useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const BookingCard = ({ car, share }) => {
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    productId,
    bookingTime,
    carName,
    category,
    clientName,
    description,
  } = car;
  console.log(productId);
  const shortDescription =
    description.length > 200 ? description.slice(0, 200) : description;

  const handleRemove = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/booking-cars/${_id}`)
          .then((res) => {
            console.log(res);
            const remaining = share.booked.filter((item) => item._id !== _id);
            console.log(remaining);
            share.setBooked(remaining);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => console.log(err.code));

        axiosSecure
          .patch(`/cars/${productId}`, { carStatus: "available" })
          .then((res) => console.log(res))
          .catch((err) => toast.error(err.code));
      }
    });
  };

  const actionBtn = (
    <>
      <Link to={`/cars/${productId}`} className="btn btn-success text-white">
        Details
      </Link>
      <button
        onClick={handleRemove}
        className="btn btn-secondary bg-red-400 text-white"
      >
        Remove
      </button>
    </>
  );

  const btnStyle =
    "py-1 px-1.5 flex items-center justify-center rounded-full gap-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row md:items-center gap-2 justify-between my_bg text-white rounded-xl p-4 mb-4"
    >
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
        <p className="mt-2">
          {shortDescription}
          {description.length > 100 && (
            <Link className="text-indigo-600"> ...More</Link>
          )}
        </p>
      </div>

      {/* action */}
      <div className="md:flex-1 flex md:justify-end">
        <div className="hidden md:inline relative">
          <CustomDropdown
            trigger={
              <BsThreeDotsVertical size={24} className="cursor-pointer" />
            }
            height={30}
            className={"right-5 top-0"}
          >
            <div className="flex flex-col bg-white p-2 rounded-lg gap-2 ">
              {actionBtn}
            </div>
          </CustomDropdown>
        </div>
        <div className="space-x-2 md:hidden">{actionBtn}</div>
      </div>
    </motion.div>
  );
};

export default BookingCard;
