import React from 'react';
import Banner from '../../Components/Banner/Banner';
import WhyRent from '../../Components/WhyRentWithUS/WhyRent';
import Feedback from '../../Components/FeedBack/Feedback';
import RecentCars from '../../Components/RecentCars/RecentCars';

const Home = () => {
    return (
        <div>
            <Banner/>
            <RecentCars/>
            <WhyRent/>
            <Feedback/>
        </div>
    );
};

export default Home;