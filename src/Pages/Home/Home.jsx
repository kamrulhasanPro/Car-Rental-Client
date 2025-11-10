import React from 'react';
import Banner from '../../Components/Banner/Banner';
import WhyRent from '../../Components/WhyRentWithUS/WhyRent';
import Feedback from '../../Components/FeedBack/Feedback';

const Home = () => {
    return (
        <div>
            <Banner/>
            <WhyRent/>
            <Feedback/>
        </div>
    );
};

export default Home;