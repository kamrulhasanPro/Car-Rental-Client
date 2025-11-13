import React from "react";
import { motion } from "framer-motion";

const MyTitle = ({children}) => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`text-3xl md:text-4xl font-semibold text-center mb-5 md:mb-10 mt-8 md:mt-16`}
      >
        {children}
      </motion.h2>
    </>
  );
};

export default MyTitle;
