import React, { useEffect, useState } from "react";
import MyTitle from "../../../../../Components/Title/MyTitle";
import MyContainer from "../../../../../Components/MyContainer/MyContainer";
import { axiosPublic } from "../../../../../api/axiosPublic";
import CarCard from "../../../../../Components/Card/CarCard";
import { motion } from "framer-motion";
import Spinner from "../../../../../Components/Spinner/Spinner";
import { toast } from "react-toastify";
import CarCardSkeleton from "../../../../../Components/Skeletor/CarCardSkeletor";

const RecentCars = () => {
  const [recentCars, setRecentCars] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    axiosPublic("/recent-cars")
      .then((res) => {
        setRecentCars(res.data);
        setLoader(false);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, []);

  return (
    <MyContainer>
      {/* title */}
      <MyTitle>
        Newest <span className="text-primary border-b-2">Cars</span>
      </MyTitle>

      {/* recent cars */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center sm:place-items-baseline"
      >
        {loader
          ? [...Array(4)].map((_, i) => <CarCardSkeleton key={i} />)
          : recentCars.map((car) => <CarCard key={car._id} car={car} />)}
      </motion.div>
    </MyContainer>
  );
};

export default RecentCars;
