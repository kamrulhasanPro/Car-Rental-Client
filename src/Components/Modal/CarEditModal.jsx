import React from "react";
import { useAxiosSecure } from "../../api/useAxiosSecure";
import { toast } from "react-toastify";

const CarEditModal = ({ car, share }) => {
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    carName,
    description,
    image,
    pricePerDay,
    category,
    seats,
    fuelType,
    providerName,
    providerEmail,
    carStatus
  } = car;

  const handleEdit = (e) => {
    e.preventDefault();
    const carName = e.target.name.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const category = e.target.brand.value;
    const seats = e.target.seats.value;
    const fuelType = e.target.fuelType.value;
    const pricePerDay = e.target.price.value;
    const location = e.target.location.value;
    const providerName = e.target.providerName.value;
    const providerEmail = e.target.providerEmail.value;

    const updatedCar = {
      carName,
      description,
      image,
      pricePerDay,
      category,
      seats,
      fuelType,
      providerName,
      providerEmail,
      location,
      carStatus
    };
    
    axiosSecure
      .patch(`/cars/${_id}`, updatedCar)
      .then((res) => {
        if(res.data.modifiedCount){
          e.target.reset();
          const filter = share.myCar.filter(car => car._id !== _id)
          share.setMyCar([updatedCar, ...filter])
          toast.success("Successfully booking.");
          document.getElementById("my_modal_6").close();
        }
      })
      .catch((err) => toast.error(err.code));
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* add car form */}
          <form
            onSubmit={handleEdit}
            className="bg-white p-7 rounded-2xl  mx-auto"
          >
            {/* --------provider information------- */}
            <h5 className="text-2xl font-medium text-primary mb-2">
              Provider Information
            </h5>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* provider name */}
              <div className="flex-1">
                <label htmlFor="" className="my_label">
                  Provider Name
                </label>
                <input
                  defaultValue={providerName}
                  type="text"
                  name="providerName"
                  className="my_input_box"
                />
              </div>

              {/* provider email */}
              <div className="flex-1">
                <label htmlFor="" className="my_label">
                  Provider Email
                </label>
                <input
                  type="email"
                  name="providerEmail"
                  className="my_input_box"
                  defaultValue={providerEmail}
                />
              </div>
            </div>

            {/* ----------car information------- */}
            <h5 className="text-2xl font-medium text-primary mb-2">
              Edit Car Information
            </h5>
            {/* car name and category */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* title */}
              <div className="flex-1">
                <label className="my_label">Car Name</label>
                <input
                  required
                  defaultValue={carName}
                  className="my_input_box"
                  type="text"
                  name="name"
                  placeholder=""
                />
              </div>

              {/* Brand */}
              <div className="flex-1 flex flex-col">
                <label className="my_label">Brand</label>
                <select
                  required
                  defaultValue={category}
                  name="brand"
                  className="select appearance-none w-full my_input_box bg-transparent border-0"
                >
                  <option disabled={true}>Pick a Brand</option>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Hatchback</option>
                  <option>Luxury</option>
                  <option>Electric</option>
                </select>
              </div>
            </div>

            {/* seats  and fuel type */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              {/* seats */}
              <div className="flex-1">
                <label className="my_label">Total Seats</label>
                <input
                  required
                  defaultValue={seats}
                  className="my_input_box"
                  type="text"
                  name="seats"
                />
              </div>

              {/* fuel Type */}
              <div className="flex-1 flex flex-col">
                <label className="my_label">Fuel Type</label>
                <select
                  required
                  name="fuelType"
                  defaultValue={fuelType}
                  className="select appearance-none w-full my_input_box bg-transparent border-0"
                >
                  <option disabled={true}>Pick fuel type</option>
                  <option>Petrol</option>
                  <option>Diesel</option>
                </select>
              </div>
            </div>

            {/* price and contact */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              {/* Price */}
              <div className="flex-1">
                <label className="my_label">
                  Price/ <small>per day</small>
                </label>
                <input
                  required
                  defaultValue={pricePerDay}
                  className="my_input_box"
                  type="text"
                  name="price"
                />
              </div>

              {/* location */}
              <div className="flex-1 flex flex-col">
                <label className="my_label">Location</label>
                <input
                  required
                  defaultValue={location}
                  type="text"
                  name="location"
                  className="my_input_box"
                />
              </div>
            </div>

            {/* car image */}
            <div className="mt-4">
              <label htmlFor="" className="my_label">
                Car Image(URL)
              </label>
              <input
                required
                defaultValue={image}
                type="url"
                name="image"
                className="my_input_box"
              />
            </div>

            {/* description */}
            <div className="mt-4">
              <label htmlFor="" className="my_label">
                Description
              </label>
              <textarea
                required
                defaultValue={description}
                type="text"
                name="description"
                className="my_input_box"
                rows={5}
              />
            </div>

            {/* button */}
            <div className="mt-5 space-x-2.5">
              <button className="my_btn">Update Car</button>
              <button
                onClick={() => document.getElementById("my_modal_6").close()}
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

export default CarEditModal;
