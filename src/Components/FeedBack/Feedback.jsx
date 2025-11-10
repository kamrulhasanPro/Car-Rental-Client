import React from "react";
import MyTitle from "../Title/MyTitle";
import FeedbackCard from "./FeedbackCard";
import MyContainer from "../MyContainer/MyContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const Feedback = () => {
  const testimonials = [
  {
    name: "John Miller",
    feedback: "Amazing experience! The car was clean and the pickup process was super smooth. Highly recommended! Amazing experience! The car was clean and the pickup process was super smooth. Highly recommended! ",
  },
  {
    name: "Aisha Rahman",
    feedback: "Really impressed with the customer service. Very professional and fast booking system.",
  },
  {
    name: "Michael Brown",
    feedback: "Affordable rates and many car options to choose from. Will rent again!",
  },
  {
    name: "Sophia Ali",
    feedback: "Quick delivery, very polite staff. Loved the experience!",
  },
  {
    name: "David Lee",
    feedback: "Good cars and best service. Honest pricing and no hidden charges.",
  },
];
  return (
    <MyContainer className="mt-16">
        {/* title */}
      <MyTitle>
        Customers <span className="text-primary border-b-2">Feedback</span>
      </MyTitle>

      <motion.div initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <Swiper 
        modules={[Autoplay]}
        autoplay={{delay:2500}}
        speed={1500}
        loop={true}
        spaceBetween={10}
        breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
        {
          testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <FeedbackCard item={item}/>
            </SwiperSlide>
          ))
        }
        </Swiper>
      </motion.div>
    </MyContainer>
  );
};

export default Feedback;
