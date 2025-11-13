import React, { useEffect, useState } from "react";
import { useAxiosSecure } from "../../api/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import Spinner from "../../Components/Spinner/Spinner";
import { FaRegFaceSmile } from "react-icons/fa6";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { Link } from "react-router";
import BookingCard from "../../Components/BookingCard/BookingCard";
import MyTitle from "../../Components/Title/MyTitle";

const MyBookings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [booked, setBooked] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    axiosSecure
      .get(`booking-cars?email=${user.email}`)
      .then((res) => {
        console.log(res);
        setBooked(res.data);
        setLoader(false);
      })
      .catch((err) => toast.error(err.code));
  }, [user, axiosSecure]);

  const emptyBooked = (
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

  const share = { booked, setBooked };

  return (
    <MyContainer className={"mt-16"}>
      <MyTitle>
        My Bookings <span className="text-primary border-b-2">Cars</span>
      </MyTitle>
      {loader ? (
        <Spinner />
      ) : booked.length === 0 ? (
        emptyBooked
      ) : (
        booked.map((car) => (
          <BookingCard key={car._id} share={share} car={car} />
        ))
      )}
    </MyContainer>
  );
};

export default MyBookings;
