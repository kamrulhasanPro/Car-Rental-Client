import React from "react";
import { BiSolidCategory } from "react-icons/bi";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { useAxiosSecure } from "../../api/useAxiosSecure";
import { toast } from "react-toastify";

const ListingsCars = ({ car, share, showModal }) => {
  const axiosSecure = useAxiosSecure();
  const { _id, carName, image, pricePerDay, category, carStatus } = car;
  console.log(car);

  const handleRemove = () => {
    // confirmation
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
          .delete(`/cars/${_id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const remaining = share.myCar.filter((item) => item._id !== _id);

              share.setMyCar(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => toast.error(err.code));
      }
    });
  };

  return (
    <tr className="bg-white border-t-2 border-[#E9E9E9]">
      {/* product */}
      <td className="my_tData">
        <div className="flex items-center gap-2">
          <figure className="w-18 h-18 overflow-hidden rounded-xl border-gray-200 border">
            <img className="w-ful h-full object-cover" src={image} alt="car" />
          </figure>
          <h4 className="text-lg font-semibold">{carName}</h4>
        </div>
      </td>

      {/* category */}
      <td className="my_tData">
        <button
          className={`py-1 px-1.5 flex items-center justify-center rounded-full gap-1  bg-red-300 text-white`}
        >
          <BiSolidCategory />
          {category}
        </button>
      </td>

      {/* price */}
      <td className="my_tData">
        <p className="text-lg font-bold">${pricePerDay}</p>
      </td>

      {/* status */}
      <td className="my_tData">
        <p
          className={`text-white rounded-full  inline py-1 px-2 ${
            carStatus == "available" ? "bg-success" : "bg-red-500"
          }`}
        >
          {carStatus}
        </p>
      </td>

      {/* action */}
      <td className="my_tData">
        <div className="flex rounded-lg gap-2 ">
          {/* details */}
          <Link to={`/cars/${_id}`} className="btn btn-success text-white">
            Details
          </Link>

          {/* edit */}
          <button
            onClick={() => {
              showModal();
              document.getElementById("my_modal_6").showModal();
            }}
            className="btn bg-blue-400 text-white"
          >
            Edit
          </button>

          {/* delete */}
          <button
            onClick={handleRemove}
            className="btn btn-secondary bg-red-400 text-white"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ListingsCars;
