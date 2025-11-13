import React, { useEffect, useState } from "react";
import MyTitle from "../Title/MyTitle";
import FeedbackCard from "./FeedbackCard";
import MyContainer from "../MyContainer/MyContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { axiosPublic } from "../../api/axiosPublic";
import { toast } from "react-toastify";

const Feedback = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    axiosPublic("/feedback")
      .then((res) => {
        console.log(res);
        setTestimonials(res.data);
      })
      .catch((err) => toast.error(err.code));
  }, []);

  return (
    <MyContainer>
      {/* title */}
      <MyTitle>
        Customers <span className="text-primary border-b-2">Feedback</span>
      </MyTitle>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Swiper
          key={testimonials.length}
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={1500}
          loop={true}
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <FeedbackCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </MyContainer>
  );
};

export default Feedback;
