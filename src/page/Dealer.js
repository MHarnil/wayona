import React from 'react'
import { motion } from "framer-motion";
import Find from '../components/Dealer/Find'
import BookScooter from '../components/Dealer/BookScooter'

const Dealer = () => {

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <>
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
                <Find />
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
                <BookScooter />
            </motion.div>
        </>
    )
}

export default Dealer
