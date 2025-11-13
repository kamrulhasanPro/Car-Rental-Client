import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { motion } from "framer-motion";
import { axiosPublic } from "../../api/axiosPublic";
import { toast } from "react-toastify";
import MyContainer from "../MyContainer/MyContainer";
import Spinner from "../Spinner/Spinner";
import CarCard from "../CarCard/CarCard";
import MyTitle from "../Title/MyTitle";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";

const SearchCar = () => {
  const [searchCar, setSearchCar] = useState([]);
  const [loader, setLoader] = useState(false);
  


  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    // console.log(search);
    setLoader(true);
    axiosPublic(`/cars?search=${search}`)
      .then((res) => {
        setSearchCar(res.data);
        setLoader(false);
      })
      .catch((err) => toast.error(err.code));
  };

  return (
    <MyContainer>
      {/* title */}
      {searchCar.length !== 0 && (
        <MyTitle>
          Searching <span className="text-primary border-b-2">Cars</span>
        </MyTitle>
      )}
      {/* search */}
      <div className="flex justify-between items-center my-4 gap-2">
        {/* search cars */}
        <form
          onSubmit={handleSearch}
          className="flex items-center justify-between border border-gray-400 focus-within:border-primary rounded-full overflow-hidden max-w-96"
        >
          <input
            type="search"
            name="search"
            className="my_input outline-none"
            placeholder="Search cars...."
          />
          <button
            type="submit"
            className="my_bg py-3 px-2 w-12 flex items-center justify-center text-white cursor-pointer"
          >
            <IoSearchSharp />
          </button>
        </form>

        {/* all cars */}
        <Link to={"/cars"} className="my_btn_outline !rounded-full">
          All Cars
        </Link>
      </div>

      {loader ? (
        <Spinner />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Swiper
            key={searchCar.length}
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            speed={1500}
            loop={true}
            spaceBetween={10}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
          >
            {searchCar.map((car, index) => (
              <SwiperSlide key={index}>
                <CarCard key={car._id} car={car} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom buttons */}
          <button className="custom-prev absolute -left-10 top-1/2 -translate-y-1/2 bg-black/20 text-primary p-2 rounded-full z-50">
            <IoIosArrowBack />
          </button>
          <button className="custom-next absolute -right-10 top-1/2 -translate-y-1/2 bg-black/20 text-primary p-2 rounded-full z-50">
            <IoIosArrowForward size={20} />
          </button>
        </motion.div>
      )}
      
    </MyContainer>
  );
};

export default SearchCar;
