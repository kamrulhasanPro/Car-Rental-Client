import React from "react";
import BannerSlider from "../Swiper/BannerSlider";

const Banner = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-neutral md:pl-[5%] relative">
      
      <div className="flex-1"></div>

      {/* content */}
      <div className="bg-linear-to-t md:bg-linear-to-r from-neutral from-75% h-full to-transparent text-white flex-1 relative md:absolute bottom-15 md:bottom-0 w-full md:w-6/12  z-10 flex flex-col items-start  justify-center space-y-3 px-[9%] md:p-0 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold">
          Save big with our <br />
          <span className="text-secondary">car </span>rental
        </h1>
        <p className=" text-gray-400 md:pr-[25%]">
          To contribute to positive change and achieve our sustainability goals
          with many extraordinary
        </p>
        <button className="my_btn">Rent Car</button>
      </div>

      {/* slider */}
      <div className="overflow-hidden flex-2 w-full">
        <BannerSlider/>
      </div>
    </section>
  );
};

export default Banner;
