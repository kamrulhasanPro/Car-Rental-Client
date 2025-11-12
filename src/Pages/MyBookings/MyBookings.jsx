import React, { useEffect, useState } from "react";
import { useAxiosSecure } from "../../api/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import Spinner from "../../Components/Spinner/Spinner";
import { FaRegFaceSmile } from "react-icons/fa6";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { Link } from "react-router";
import BookingCard from "../../Components/BookingCard/BookingCard";

const MyBookings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [booked, setBooked] = useState(null);

  useEffect(() => {
    axiosSecure
      .get(`booking-cars?email=${user.email}`)
      .then((res) => {
        console.log(res);
        setBooked(res.data);
      })
      .catch((err) => toast.error(err.code));
  }, [user, axiosSecure]);

  if (!booked) {
    return <Spinner />;
  }

  if (booked.length === 0) {
    return (
      <div className="flex items-center justify-center mt-10">
        <MyContainer className="flex flex-col max-w-80 items-center justify-center bg-white p-4 text-center rounded-2xl gap-2.5 shadow">
          <FaRegFaceSmile className="text-3xl text-primary" />
          <div>
            <h5 className="text-3xl mb-1">No Booked Car Yet</h5>
            <p className="text-gray-400">
              You haven't added any booking car yet. Please Booking car{" "}
            </p>
          </div>
          <Link to={"/cars"} className="my_btn">
            Add Your First Booking
          </Link>
        </MyContainer>
      </div>
    );
  }

  return (
    <MyContainer>
      {booked.map((car) => (
        <BookingCard key={car._id} car={car}/>
      ))}
    </MyContainer>
  );
};

export default MyBookings;
