import React from "react";
import Banner from "../../../Components/Banner/Banner";
import WhyRent from "../../../Components/WhyRentWithUS/WhyRent";
import Feedback from "../../../Components/FeedBack/Feedback";
import RecentCars from "../../../Components/RecentCars/RecentCars";
import TopRatedCars from "../../../Components/TopRatedCars/TopRatedCars";
import SearchCar from "../../../Components/SearchCar/SearchCar";
import TrustedPartner from "../TrustedPartner/TrustedPartner";
import RantCarAMinute from "../EasyBookingStep/RantCarAMinute";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <Banner />
      <SearchCar />
      <RecentCars />
      <WhyRent />
      <TopRatedCars />
      <RantCarAMinute />
      <TrustedPartner />
      <Feedback />
      <FAQ />
    </div>
  );
};

export default Home;
