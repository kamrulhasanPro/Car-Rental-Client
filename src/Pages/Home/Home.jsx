import React from 'react';
import Banner from '../../Components/Banner/Banner';
import WhyRent from '../../Components/WhyRentWithUS/WhyRent';
import Feedback from '../../Components/FeedBack/Feedback';
import RecentCars from '../../Components/RecentCars/RecentCars';
import CustomDropdown from '../../Components/CustomDropdown/CustomDropdown';
import TopRatedCars from '../../Components/TopRatedCars/TopRatedCars';

const Home = () => {
    return (
        <div>
            <Banner/>
            <CustomDropdown/>
            <RecentCars/>
            <WhyRent/>
            <TopRatedCars/>
            <Feedback/>
        </div>
    );
};

export default Home;