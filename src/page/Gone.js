import React from 'react'
import { motion } from "framer-motion";
import ScooterDetails from '../components/G-one/ScooterDetails'
import Specification from '../components/global/Specification'
import BookScooter from '../components/G-lite/BookScooter'
import BikeSlider from '../components/G-one/BikeSlider'
import Features from '../components/global/Features'
import Headlight from '../components/global/Headlight'

const Gone = () => {

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <>
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
                <ScooterDetails />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
                <Features />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
                <BikeSlider />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
                <Headlight />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
                <Specification />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
                <BookScooter />
            </motion.div>

        </>
    )
}

export default Gone
