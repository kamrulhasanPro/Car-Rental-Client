import React, { useEffect, useState } from "react";
import MyTitle from "../Title/MyTitle";
import { axiosPublic } from "../../api/axiosPublic";
import { toast } from "react-toastify";
import MyContainer from "../MyContainer/MyContainer";
import Spinner from "../Spinner/Spinner";
import TopRatedCarsCard from "./TopRatedCarsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const TopRatedCars = () => {
  const [topCar, setTopCar] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosPublic("top-cars")
      .then((res) => {
        console.log(res);
        setTopCar(res.data);
        setLoading(false);
      })
      .then((err) => toast.error(err.code));
  }, []);

  return (
    <div className="">
      {/* title */}
      <MyTitle>
        Top Rated <span className="text-primary border-b-2">Cars</span>
      </MyTitle>

      

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
            className="absolute left-0 bottom-0 -z-10 object-cover h-80"
            src="https://i.postimg.cc/5y7KpkBM/home4_car_tab_bg.png"
            alt=""
          />
        
        {loading ? (
          <Spinner />
        ) : (
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
            loop={true}
            speed={1500}
            slidesPerView={1}
            pagination={{clickable: true, el: '.custom-pagination'}}
          >
            {topCar.map((car, index) => (
              <SwiperSlide key={index}>
                <TopRatedCarsCard key={index} car={car} />
              </SwiperSlide>
            ))}

            {/* custom pagination */}
            <div className="custom-pagination flex items-center justify-center gap-1.5 mt-2.5 cursor-pointer"></div>
          </Swiper>
        )}
      </motion.div>
    </div>
  );
};

export default TopRatedCars;
