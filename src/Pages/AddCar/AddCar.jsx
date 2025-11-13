import React from "react";
import MyContainer from "../../Components/MyContainer/MyContainer";
import MyTitle from "../../Components/Title/MyTitle";
import useAuth from "../../Hooks/useAuth";
import { useAxiosSecure } from "../../api/useAxiosSecure";
import { toast } from "react-toastify";

const AddCar = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleCreate = (e) => {
    e.preventDefault();
    const carName = e.target.name.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const category = e.target.brand.value;
    const seats = e.target.seats.value;
    const fuelType = e.target.fuelType.value;
    const pricePerDay = e.target.price.value;
    const location = e.target.location.value;
    const providerName = user.displayName;
    const providerEmail = user.email;
    const randomRating = Math.floor(Math.random() * 5) + 1;

    const newCar = {
      carName,
      description,
      image,
      category,
      seats,
      fuelType,
      pricePerDay,
      providerName,
      providerEmail,
      location,
      carStatus: "available",
      ratings: randomRating,
      created_at: new Date(),
    };

    // post in database
    axiosSecure.post('/cars', newCar)
    .then(res => {
        if(res.data.insertedId){
            toast.success('Successfully post your car.')
            e.target.reset()
        }
    })
    .catch(err => toast.error(err.code))
  };
  
  return (
    <MyContainer>
      {/* title */}
      <MyTitle>
        Add <span className="text-primary border-b-2">New Car</span>
      </MyTitle>

      {/* add car form */}
      <form
        onSubmit={handleCreate}
        className="bg-white p-7 rounded-2xl lg:max-w-9/12 mx-auto"
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
              value={user.displayName}
              readOnly
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
              value={user.email}
              readOnly
            />
          </div>
        </div>

        {/* ----------car information------- */}
        <h5 className="text-2xl font-medium text-primary mb-2">
          Car Information
        </h5>
        {/* car name and category */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* title */}
          <div className="flex-1">
            <label className="my_label">Car Name</label>
            <input
              required
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
              defaultValue="Pick a brand"
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
            <input required className="my_input_box" type="text" name="seats" />
          </div>

          {/* fuel Type */}
          <div className="flex-1 flex flex-col">
            <label className="my_label">Fuel Type</label>
            <select
              required
              name="fuelType"
              defaultValue="Pick a color"
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
            <input required className="my_input_box" type="text" name="price" />
          </div>

          {/* location */}
          <div className="flex-1 flex flex-col">
            <label className="my_label">Location</label>
            <input
              required
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
          <input required type="url" name="image" className="my_input_box" />
        </div>

        {/* description */}
        <div className="mt-4">
          <label htmlFor="" className="my_label">
            Description
          </label>
          <textarea
            required
            type="text"
            name="description"
            className="my_input_box"
            rows={5}
          />
        </div>

        {/* button */}
        <button className="my_btn btn-block mt-4">Post The Car</button>
      </form>
    </MyContainer>
  );
};

export default AddCar;
