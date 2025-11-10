import React from 'react';
import { motion } from 'framer-motion';

const Spinner = () => {
    return (
        <div className='flex items-center justify-center'> 
            <motion.img 
            animate={{
                x: ["-50%", "100%", "-50%"]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
            }}
            className=''
            src="/Logo.png" alt="" />
            
        </div>
    );
};

export default Spinner;