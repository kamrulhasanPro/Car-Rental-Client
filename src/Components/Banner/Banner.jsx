import React, { useState } from "react";
import BannerSlider from "../Swiper/BannerSlider";
import { motion } from "framer-motion";
import { Link } from "react-router";
// import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <section className="">
      {/* slider */}
      <div className="overflow-hidden w-full relative ">
        <BannerSlider />
        <div className="absolute inset-0 z-50 bg-black/80 flex items-center justify-center ">
          <motion.div
            animate={{
              x: ["-20%", "0%"],
            }}
            transition={{
              duration: 2,
            }}
            className="space-y-3 text-center"
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

            <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-white">
              Save big with our <br />
              <span className="text-secondary">car </span>rental
            </h1>
            <p className=" text-gray-400 max-w-[571px] px-2">
              To contribute to positive change and achieve our sustainability
              goals with many extraordinary
            </p>
            <Link to={"/cars"} className="my_btn_outline !text-white">
              Rent Car
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
