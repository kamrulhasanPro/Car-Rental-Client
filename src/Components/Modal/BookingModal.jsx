import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useAxiosSecure } from "../../api/useAxiosSecure";
import { toast } from "react-toastify";

const BookingModal = ({ car }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {_id, carName, description, image, pricePerDay, category, seats } = car;

  const handleBooked = (e) => {
    e.preventDefault();
    const clientName = user.displayName;
    const clientEmail = user.email;
    const clientContact = e.target.contact.value;
    const clientAddress = e.target.address.value;

    const newBookingCar = {
      clientName,
      clientEmail,
      clientContact,
      clientAddress,
      carName,
      description,
      image,
      pricePerDay,
      category,
      seats,
      bookingTime: new Date(),
    };
    console.log(newBookingCar);
    axiosSecure.post('/booking-cars', newBookingCar)
    .then(res => console.log(res))
    .catch(err => toast.error(err.code))

    axiosSecure.patch(`/cars/${_id}`, {carStatus: 'booked'})
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleBooked}>
            {/* name */}
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={user.displayName}
                readOnly
                className="my_input !rounded-sm mt-1"
                placeholder="Enter your name"
              />
            </div>

            {/* name */}
            <div className="mt-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={user.email}
                readOnly
                className="my_input !rounded-sm mt-1"
                placeholder="Enter your email"
              />
            </div>

            {/* Contact */}
            <div className="mt-3">
              <label htmlFor="contact">Contact</label>
              <input
                type="text"
                id="contact"
                name="contact"
                className="my_input !rounded-sm mt-1"
                placeholder="+880"
              />
            </div>

            {/* Address */}
            <div className="mt-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="my_input !rounded-sm mt-1"
                placeholder="Enter your address"
              />
            </div>

            {/* button */}
            <div className="mt-5 space-x-2.5">
              <button className="my_btn">Booked Now</button>
              <button
                onClick={() => document.getElementById("my_modal_5").close()}
                type="button"
                className="btn bg-red-400 text-white"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default BookingModal;
