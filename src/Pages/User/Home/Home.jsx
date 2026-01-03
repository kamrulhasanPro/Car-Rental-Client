import React from "react";
import Banner from "./Sections/Banner/Banner";
import WhyRent from "./Sections/WhyRentWithUS/WhyRent";
import Feedback from "./Sections/FeedBack/Feedback";
import RecentCars from "./Sections/RecentCars/RecentCars";
import TopRatedCars from "./Sections/TopRatedCars/TopRatedCars";
import SearchCar from "./Sections/SearchCar/SearchCar";
import TrustedPartner from "./Sections/TrustedPartner/TrustedPartner";
import RantCarAMinute from "./Sections/EasyBookingStep/RantCarAMinute";
import FAQ from "./Sections/FAQ/FAQ";
import Newsletter from "./Sections/Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Banner />
      <SearchCar />
      <RecentCars />
      <TopRatedCars />
      <WhyRent />
      <RantCarAMinute />
      <TrustedPartner />
      <Feedback />
      <FAQ />
      <Newsletter />
    </div>
  );
};

export default Home;
