import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const BannerSlider = () => {
  const image = [
    "https://i.postimg.cc/5tspMwMq/h1-rev-img-2b.jpg",
    "https://i.postimg.cc/6QMzNdXs/h1-rev-img-3b.jpg",
    "https://i.postimg.cc/fLkCWJwG/h1-rev-img-4b.jpg",
    "https://i.postimg.cc/ZqsPQ4rs/h1-rev-img-1b.jpg",
  ];
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000 }}
      centeredSlides={true}
      loop={true}
    >
      {
        image.map((slidingIMG, ind) => (
      <SwiperSlide key={ind}>
        <img className="hover:scale-105 duration-200" src={slidingIMG} alt="" />
      </SwiperSlide>
        ))
      }
      {/* <SwiperSlide>
        <img src="https://i.postimg.cc/ZqsPQ4rs/h1-rev-img-2b.jpg" alt="" />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default BannerSlider;
