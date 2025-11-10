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
        className={`text-4xl font-semibold text-center mb-10`}
      >
        {children}
      </motion.h2>
    </>
  );
};

export default MyTitle;
