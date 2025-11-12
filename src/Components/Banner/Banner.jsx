import React, { useState } from "react";
import BannerSlider from "../Swiper/BannerSlider";
import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-neutral md:pl-[5%] relative">
      <div className="flex-1"></div>

      {/* content */}
      <div className="bg-linear-to-t md:bg-linear-to-r from-neutral from-75% h-full to-transparent text-white flex-1 relative md:absolute bottom-15 md:bottom-0 w-full md:w-6/12  z-10 flex flex-col items-start  justify-center px-[9%] md:p-0 ">
        <motion.div
          animate={{
            x: ["-20%", "0%"],
          }}
          transition={{
            duration: 2,
          }}
          className="space-y-3 "
        >
          {/* <h2 className="text-xl whitespace-nowrap">
          
          <Typewriter
            words={[
              "Welcome to Car Rental"]}
              loop={1}
              cursor={showCursor}
              onLoopDone={() => setShowCursor(false)}
            />
            {" "}
            </h2> */}

          <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold">
            Save big with our <br />
            <span className="text-secondary">car </span>rental
          </h1>
          <p className=" text-gray-400 md:pr-[25%]">
            To contribute to positive change and achieve our sustainability
            goals with many extraordinary
          </p>
          <button className="my_btn_outline">Rent Car</button>
        </motion.div>
      </div>

      {/* slider */}
      <div className="overflow-hidden flex-2 w-full ">
        <BannerSlider />
      </div>
    </section>
  );
};

export default Banner;
