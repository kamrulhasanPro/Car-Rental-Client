import React, { useEffect, useState } from "react";
import { useAxiosSecure } from "../../api/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import MyContainer from "../../Components/MyContainer/MyContainer";
import MyTitle from "../../Components/Title/MyTitle";
import Spinner from "../../Components/Spinner/Spinner";
import { FaRegFaceSmile } from "react-icons/fa6";
import { Link } from "react-router";
import ListingsCars from "../../Components/ListingsCard/ListingsCars";
import CarEditModal from "../../Components/Modal/CarEditModal";

const MyListings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [myCar, setMyCar] = useState([]);
  const share = {myCar, setMyCar}
  const [loader, setLoader] = useState(false);
  const [modalData, setModalData] = useState([])

  useEffect(() => {
    setLoader(true);
    axiosSecure(`/cars?email=${user.email}`)
      .then((res) => {
        console.log(res);
        setMyCar(res.data);
        setLoader(false);
      })
      .catch((err) => toast.error(err.code));
  }, [user, axiosSecure]);

  const emptyMyCar = (
    <div className="flex items-center justify-center mt-10">
      <MyContainer className="flex flex-col max-w-80 items-center justify-center bg-white p-4 text-center rounded-2xl gap-2.5 shadow">
        <FaRegFaceSmile className="text-3xl text-primary" />
        <div>
          <h5 className="text-3xl mb-1">Not found your car</h5>
          <p className="text-gray-400">
            You haven't added any created car yet. Please create car{" "}
          </p>
        </div>
        <Link to={"/add-car"} className="my_btn">
          Add Your First Booking
        </Link>
      </MyContainer>
    </div>
  );

  return (
    <MyContainer>
      {/* title */}
      <MyTitle>
        Add <span className="text-primary border-b-2">New Car</span>
      </MyTitle>

      {/* my car */}
      <div>
        {loader ? (
          <Spinner />
        ) : myCar.length === 0 ? (
          emptyMyCar
        ) : (
          <div className=" border-2 overflow-auto border-[#E9E9E9] shadow-xs rounded-lg">
            <table className="w-full shadow-sm rou text-left">
            <thead>
              <tr className="bg-amber-100 overflow-hidden">
                <th className="my_thead">Product</th>
                <th className="my_thead">Category</th>
                <th className="my_thead">Price</th>
                <th className="my_thead">Status</th>
                <th className="my_thead">Action</th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              {myCar.map((car) => (
                <ListingsCars key={car._id} car={car} showModal={() => setModalData(car)} share={share}/>
              ))}
            </tbody>
          </table>
          </div>
        )}
      </div>

      <CarEditModal share={share} car={modalData}/>
    </MyContainer>
  );
};

export default MyListings;
